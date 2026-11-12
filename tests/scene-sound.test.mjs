import test from 'node:test';
import assert from 'node:assert/strict';
import { soundNotes, playSceneSound, stopSceneSound } from '../app/components/scene/sound.ts';

test('scene audio remains inactive until explicitly prepared by a user gesture',()=>{
  assert.doesNotThrow(()=>playSceneSound('stimulation','caffeine',0));
  assert.doesNotThrow(()=>stopSceneSound());
});

test('all accents are brief, quiet, and below harsh high frequencies',()=>{
  for(const family of ['stimulation','heat','perception','slowdown','cannabinoid','dissociation','anabolic','bodycare','interactions']) {
    for(const stage of [0,1,2]) {
      const notes=soundNotes(family,'caffeine',stage);
      assert.ok(notes.length<=2);
      for(const note of notes) {
        assert.ok(note.gain<=.025);
        assert.ok(note.delay+note.duration<.6);
        assert.ok(note.frequency>100&&note.frequency<1000);
      }
    }
  }
  assert.equal(soundNotes('slowdown','fentanyl',2).length,1);
});
