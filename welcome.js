import os from 'os';

export function typeOS () {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}