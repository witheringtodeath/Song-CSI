# witheringtodeath_

Projects by witheringtodeath_.

- **Song CSI**: a Mac app that finds the beat, the key and every chord in a song, writes out tabs for guitar, bass, piano and drums, and splits it into every instrument so you can play along. See `song-csi/`.
- **MScSM Co-op Radar**: a board of paid sustainability internships and co-ops in the GTA and remote in Canada, for the May–August 2027 work term. See `coop-radar/`.

Song CSI is an independent project and isn't affiliated with CBS or the CSI television series.

---

## Publishing this site with GitHub Pages

1. **Create a GitHub account** at github.com if you don't have one. GitHub usernames can't contain underscores, so pick something like `witheringtodeath`.
2. **Create a repository** named exactly `<your-username>.github.io` (for example `witheringtodeath.github.io`). Make it **Public** and tick **Add a README file**.
3. **Upload the site.** In the repository click **Add file → Upload files**, drag in everything from this folder (`index.html`, `404.html`, `README.md` and the `assets`, `song-csi` and `coop-radar` folders), then click **Commit changes**.
4. **Turn on Pages.** Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**. After a minute or two the site is live at `https://<your-username>.github.io`.
5. **Attach the Mac app.** The app is too big to live in the repository (GitHub's limit is 100 MB per file), so it goes in a release:
   - Click **Releases → Create a new release** (on the repository's main page, right-hand side).
   - Tag: `v2.3`. Title: `Song CSI 2.3`.
   - Drag in **`Song-CSI-mac-arm64.zip`**. Keep that exact file name: the site's Download buttons always point to the newest release's `Song-CSI-mac-arm64.zip`.
   - Click **Publish release**.

That's it. Share `https://<your-username>.github.io`.

### Using a different repository name or your own domain

The Download buttons work out the repository from the address. If you publish under another repository name it still works (`https://<user>.github.io/<repo>/`). With a custom domain, open `assets/site.js` and set `SITE_REPO = 'your-username/your-repo'`.

### Updating

- **New Song CSI version:** create a new release and attach the new `Song-CSI-mac-arm64.zip`. Also update the version line in `song-csi/index.html`.
- **New Co-op Radar list:** replace `coop-radar/index.html` with a new snapshot of the board.

### If a Mac says the app is damaged

That message comes from the download quarantine on unsigned apps. In Terminal:

```
xattr -dr com.apple.quarantine "/Applications/Song CSI.app"
```

## Credits

Song CSI runs these open-source projects on the user's Mac: Demucs (Meta AI Research, MIT), Beat This! (JKU Linz, MIT), BTC chord recognition (Park et al., MIT), Basic Pitch (Spotify, Apache 2.0) and Electron (MIT). Typefaces: Instrument Serif and Geist Mono (SIL Open Font License).
