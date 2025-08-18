import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime';

// config/jest/setupTest.ts

import { TextEncoder, TextDecoder } from 'util';

if (!global.TextEncoder) {
    global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
    global.TextDecoder = TextDecoder;
}
