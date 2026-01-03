import { ref } from 'vue'

export function useDownload() {
  const isDownloading = ref(false)
  const error = ref(null)

  const downloadFile = async (url, filename) => {
    isDownloading.value = true
    error.value = null

    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(downloadUrl)
    } catch (err) {
      error.value = err.message
      console.error('Download error:', err)
    } finally {
      isDownloading.value = false
    }
  }

  return {
    isDownloading,
    error,
    downloadFile
  }
}
