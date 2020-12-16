import { select } from './select';
import { progress } from './progress';
import { delay } from './delay';
import { question } from './question';
import { read } from './read';
import { error } from './error';
import { success } from './success';
import { message } from './message';
import { warn } from './warn';
export declare const ui: {
    select: typeof select;
    delay: typeof delay;
    warn: typeof warn;
    progress: typeof progress;
    question: typeof question;
    read: typeof read;
    error: typeof error;
    success: typeof success;
    message: typeof message;
};