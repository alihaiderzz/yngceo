import Script from "next/script"

/** Runs before React hydrates so `data-theme` matches localStorage and CSS applies immediately. */
export function ThemeScript() {
  const code =
    "(function(){try{var k='yngceo-theme';var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark')t='dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();"
  return (
    <Script id="yngceo-theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: code }} />
  )
}
