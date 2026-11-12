import test from 'node:test';
import assert from 'node:assert/strict';
import { substances } from '../app/data/substances.ts';
import { getExposure } from '../app/components/scene/exposure.ts';

test('every substance has a documented exposure instead of the symbolic fallback', () => {
  const kinds = new Set(['tablet', 'capsule', 'edible', 'blotter', 'mushroom', 'drink', 'oral-liquid', 'oral-spray', 'buccal', 'inhaler', 'dry-powder-inhaler', 'nebulizer', 'nasal-spray', 'nasal-powder', 'patch', 'topical', 'face-cream', 'pen', 'subcutaneous', 'injection', 'infusion', 'gas-mask', 'gas-balloon', 'vapor', 'food', 'research']);
  for (const entry of substances) {
    const exposure = getExposure(entry.id);
    assert.ok(kinds.has(exposure.kind), `${entry.id}: ${exposure.kind}`);
    assert.ok(exposure.label.trim() && exposure.description.trim(), entry.id);
    assert.equal(new URL(exposure.source).protocol, 'https:', entry.id);
  }
});

test('unknown IDs cannot silently become tablets or inherit object properties', () => {
  for (const id of ['new-unreviewed-drug', '', 'constructor', '__proto__', 'toString']) {
    assert.throws(() => getExposure(id), /No authored exposure/, id);
  }
});

test('selected formulations stay aligned with the entry indication', () => {
  const cases = {
    cannabis: 'edible', lsd: 'blotter', psilocybin: 'mushroom', nicotine: 'vapor',
    cocaine: 'nasal-powder', ketamine: 'nasal-powder', fentanyl: 'patch',
    testosterone: 'topical', minoxidil: 'tablet', budesonide: 'capsule',
    tretinoin: 'capsule', tacrolimus: 'capsule', triamcinolone: 'tablet',
    nystatin: 'oral-liquid', fosfomycin: 'oral-liquid', clotrimazole: 'buccal',
    miconazole: 'buccal', buprenorphine: 'buccal', rimegepant: 'buccal', nitroglycerin: 'oral-spray',
    ipratropium: 'nasal-spray', azelastine: 'nasal-spray', lidocaine: 'patch',
    semaglutide: 'pen', 'insulin-glargine': 'pen', enoxaparin: 'subcutaneous',
    'zoledronic-acid': 'infusion', ceftriaxone: 'infusion', mupirocin: 'topical',
    adapalene: 'face-cream', 'azelaic-acid': 'face-cream', soy: 'food',
    'vitamin-k': 'food', 'thiamin-vitamin-b1': 'food', 'nitrous-oxide': 'gas-balloon',
  };
  for (const [id, kind] of Object.entries(cases)) assert.equal(getExposure(id).kind, kind, id);
});

test('contact sites distinguish facial treatment, subcutaneous delivery and upper-arm forms', () => {
  for (const id of ['semaglutide', 'insulin-glargine', 'enoxaparin', 'denosumab']) assert.equal(getExposure(id).site, 'abdomen', id);
  for (const id of ['testosterone', 'fentanyl']) assert.equal(getExposure(id).site, 'upper-arm', id);
  assert.equal(getExposure('nandrolone').site, 'hip');
  for (const id of ['mupirocin', 'clobetasol', 'lidocaine', 'zoledronic-acid']) assert.equal(getExposure(id).site, 'arm', id);
  for (const id of ['adapalene', 'azelaic-acid']) assert.equal(getExposure(id).site, 'face', id);
});

test('preclinical samples do not acquire an invented administration site', () => {
  for (const id of ['dihexa', 'kpv', 'peg-mgf', 'mots-c', 's-23', 'lgd-3303', 'bms-564929', 'tfm-4as-1', 'yk-11']) {
    const exposure = getExposure(id);
    assert.equal(exposure.kind, 'research', id);
    assert.equal(exposure.site, undefined, id);
  }
});

test('one caller cannot mutate another scene’s selected exposure', () => {
  const exposure = getExposure('semaglutide');
  assert.throws(() => { exposure.kind = 'tablet'; }, TypeError);
  assert.equal(getExposure('semaglutide').kind, 'pen');
});
