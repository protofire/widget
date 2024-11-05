import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useFieldActions } from '../../stores/form/useFieldActions.js'
import { useSplitSubvariantStore } from '../../stores/settings/useSplitSubvariantStore.js'
import { Tab, Tabs } from '../Tabs/Tabs.style.js'
import { HeaderAppBar } from './Header.style.js'
import { SettingsButton } from './SettingsButton.js'
import { TransactionHistoryButton } from './TransactionHistoryButton.js'

export const NavigationTabs = () => {
  const { t } = useTranslation()
  const [state, setState] = useSplitSubvariantStore((state) => [
    state.state,
    state.setState,
  ])

  const { setFieldValue } = useFieldActions()
  const handleChange = (_: React.SyntheticEvent, value: number) => {
    setFieldValue('fromAmount', '')
    setFieldValue('fromToken', '')
    setFieldValue('toToken', '')
    setState(value === 0 ? 'swap' : 'bridge')
  }

  return (
    <HeaderAppBar elevation={0} sx={{ paddingTop: 1, paddingBottom: 0.5 }}>
      <Box flex={1} display="flex" justifyContent="center">
        <Tabs
          value={state === 'swap' ? 0 : 1}
          onChange={handleChange}
          aria-label="tabs"
          indicatorColor="primary"
          sx={{ minWidth: 0 }}
        >
          <Tab label={t('header.swap')} disableRipple />
          <Tab label={t('header.bridge')} disableRipple />
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
        <TransactionHistoryButton />
        <SettingsButton />
      </Box>
    </HeaderAppBar>
  )
}
