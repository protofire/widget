import type { SafeParameters } from 'wagmi/connectors'

export const defaultSafeConfig: SafeParameters = {
  allowedDomains: [/.*/],
  debug: true,
}
