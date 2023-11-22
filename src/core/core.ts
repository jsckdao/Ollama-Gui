import { SimpleCore } from 'simple-core-state';
import { ICoreType } from './types';

const instance = new SimpleCore<ICoreType>(
  {
    conversations: {
      session: { chatHistory: [], ctx: [], model: 'codellama', name: 'Session' },
    },
    current_conversation: 'session',
    model: 'llama2-chinese:13b-chat-q4_0',
    localAPI: '/api',
    server_connected: false,
    installed_models: [],
    visited: false,
  },
  { storage: { prefix: 'ollama_web_ui_' } }
);

instance.persist([
  'model',
  'localAPI',
  'visited',
  'conversations',
  'current_conversation',
]);

export const core = instance.core();
