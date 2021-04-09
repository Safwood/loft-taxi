export const PRELOADER_ON = "preloader/PRELOADER_ON"
export const PRELOADER_OFF = "preloader/PRELOADER_OFF"

export const preloaderOn = () => ({type: PRELOADER_ON} as const)
export const preloaderOff = () => ({type: PRELOADER_OFF} as const)