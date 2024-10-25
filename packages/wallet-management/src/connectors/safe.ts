import { type SafeParameters, safe } from 'wagmi/connectors'
import { extendConnector } from './utils.js'

export const createSafeConnector = /*#__PURE__*/ (params: SafeParameters) =>
  extendConnector(safe(params), 'safe', 'Safe')
