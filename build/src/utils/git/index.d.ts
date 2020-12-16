import { commit } from './commit';
import { tag } from './tag';
import { assertClean } from './assertClean';
import { push } from './push';
export declare const git: {
    commit: typeof commit;
    tag: typeof tag;
    assertClean: typeof assertClean;
    push: typeof push;
};
