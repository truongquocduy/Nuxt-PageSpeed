export const cdnImage = (url: string, { s = '_md' }: { s?: string } = {}): string => {
    if (!url) return ''

    let pathname = url

    // Parse URL only if it's a valid full URL
    try {
        pathname = new URL(url).pathname
    }
    catch {
        // If error occurs, we assume url is a relative path
    }

    // Normalize path and add size prefix
    pathname = `/${s}${pathname}`.replace(/\/{2,}/g, '/')

    // Return the final CDN URL
    // return `//image.${useRequestURL().host}${pathname}`
    return `//image.mavangthangloi.com${pathname}`
}
