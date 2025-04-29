2025-04-29T03:09:58.718709422Z	Cloning repository...
2025-04-29T03:09:59.277887553Z	From https://github.com/cnmzsjbz199328/businessService
2025-04-29T03:09:59.278249636Z	 * branch            0b8648528d5ee2f417cc82d2ff43895c23a958a9 -> FETCH_HEAD
2025-04-29T03:09:59.278263949Z	
2025-04-29T03:09:59.309965783Z	HEAD is now at 0b86485 refactor: update Next.js configuration and build scripts
2025-04-29T03:09:59.310264635Z	
2025-04-29T03:09:59.386781571Z	
2025-04-29T03:09:59.387102443Z	Using v2 root directory strategy
2025-04-29T03:09:59.410083382Z	Success: Finished cloning repository files
2025-04-29T03:10:01.107999378Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-04-29T03:10:01.108641558Z	
2025-04-29T03:10:02.228061182Z	No wrangler.toml file found. Continuing.
2025-04-29T03:10:02.305377173Z	Detected the following tools from environment: nodejs@20.0.0, npm@9.6.7
2025-04-29T03:10:02.306042684Z	Installing nodejs 20.0.0
2025-04-29T03:10:03.398198352Z	Trying to update node-build... ok
2025-04-29T03:10:03.495132894Z	To follow progress, use 'tail -f /tmp/node-build.20250429031003.486.log' or pass --verbose
2025-04-29T03:10:03.594866018Z	Downloading node-v20.0.0-linux-x64.tar.gz...
2025-04-29T03:10:03.852079667Z	-> https://nodejs.org/dist/v20.0.0/node-v20.0.0-linux-x64.tar.gz
2025-04-29T03:10:05.748889965Z	
2025-04-29T03:10:05.749109795Z	WARNING: node-v20.0.0-linux-x64 is in LTS Maintenance mode and nearing its end of life.
2025-04-29T03:10:05.749680339Z	It only receives *critical* security updates, *critical* bug fixes and documentation updates.
2025-04-29T03:10:05.749861011Z	
2025-04-29T03:10:05.749960963Z	Installing node-v20.0.0-linux-x64...
2025-04-29T03:10:06.146555431Z	Installed node-v20.0.0-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/20.0.0
2025-04-29T03:10:06.146762855Z	
2025-04-29T03:10:07.175721287Z	Installing project dependencies: npm clean-install --progress=false
2025-04-29T03:10:08.050051791Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.050397784Z	npm WARN EBADENGINE   package: '@eslint/config-array@0.20.0',
2025-04-29T03:10:08.050412595Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.053333364Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.053355251Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.053361357Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.053366173Z	npm WARN EBADENGINE   package: '@eslint/config-helpers@0.2.1',
2025-04-29T03:10:08.053370924Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.053375992Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.053467056Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.05347454Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.053479135Z	npm WARN EBADENGINE   package: '@eslint/core@0.12.0',
2025-04-29T03:10:08.053483876Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.053488748Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.053493531Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.05349845Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.05350333Z	npm WARN EBADENGINE   package: '@eslint/eslintrc@3.3.1',
2025-04-29T03:10:08.053508152Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.053512917Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.053517819Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.053522437Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.053527113Z	npm WARN EBADENGINE   package: '@eslint/js@9.24.0',
2025-04-29T03:10:08.053531241Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.053535585Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.053540272Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.05355541Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.053560177Z	npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.6',
2025-04-29T03:10:08.053570024Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.05365351Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.053673995Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.053818327Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.05388568Z	npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.8',
2025-04-29T03:10:08.054137947Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.054253715Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.054480184Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.054489835Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.054635026Z	npm WARN EBADENGINE   package: '@eslint/core@0.13.0',
2025-04-29T03:10:08.054733837Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.05491025Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.054946828Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.056080777Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.056625602Z	npm WARN EBADENGINE   package: '@typescript-eslint/eslint-plugin@8.29.1',
2025-04-29T03:10:08.057273707Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.057451455Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.059959742Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.059977539Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.059981329Z	npm WARN EBADENGINE   package: '@typescript-eslint/parser@8.29.1',
2025-04-29T03:10:08.059984937Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.059988157Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.059991094Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.059994211Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.059998512Z	npm WARN EBADENGINE   package: '@typescript-eslint/scope-manager@8.29.1',
2025-04-29T03:10:08.060001613Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.060004612Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.060007712Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.060010767Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.060013677Z	npm WARN EBADENGINE   package: '@typescript-eslint/type-utils@8.29.1',
2025-04-29T03:10:08.060016785Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.060019809Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.060022635Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.060025591Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.060028572Z	npm WARN EBADENGINE   package: '@typescript-eslint/types@8.29.1',
2025-04-29T03:10:08.060031589Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.060478008Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.060763085Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.060780607Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.060786005Z	npm WARN EBADENGINE   package: '@typescript-eslint/typescript-estree@8.29.1',
2025-04-29T03:10:08.060791147Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.060998472Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.061175315Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.061185702Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.061271547Z	npm WARN EBADENGINE   package: '@typescript-eslint/utils@8.29.1',
2025-04-29T03:10:08.061586049Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.061592867Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.061603931Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.061673053Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.061821285Z	npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@8.29.1',
2025-04-29T03:10:08.061942092Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.062061404Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.063579964Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.063781109Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.063789294Z	npm WARN EBADENGINE   package: 'eslint@9.24.0',
2025-04-29T03:10:08.063808631Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.063814062Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.063819063Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.063823873Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.063828844Z	npm WARN EBADENGINE   package: 'eslint-scope@8.3.0',
2025-04-29T03:10:08.063833462Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.063838072Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.063842384Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.063858308Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.063863304Z	npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.2.0',
2025-04-29T03:10:08.064097773Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.064318135Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.064334193Z	npm WARN EBADENGINE }
2025-04-29T03:10:08.064787479Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:10:08.064808194Z	npm WARN EBADENGINE   package: 'espree@10.3.0',
2025-04-29T03:10:08.064813851Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:10:08.064818274Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:10:08.064824555Z	npm WARN EBADENGINE }
2025-04-29T03:10:26.444934445Z	
2025-04-29T03:10:26.445389738Z	added 406 packages, and audited 407 packages in 19s
2025-04-29T03:10:26.44551895Z	
2025-04-29T03:10:26.445738892Z	150 packages are looking for funding
2025-04-29T03:10:26.445927334Z	  run `npm fund` for details
2025-04-29T03:10:26.44630528Z	
2025-04-29T03:10:26.44658976Z	found 0 vulnerabilities
2025-04-29T03:10:26.458866956Z	Executing user command: npm run cloudflare
2025-04-29T03:10:27.121604318Z	
2025-04-29T03:10:27.121821679Z	> product-market-analysis@0.1.0 cloudflare
2025-04-29T03:10:27.121950163Z	> next build
2025-04-29T03:10:27.122098444Z	
2025-04-29T03:10:27.809206843Z	
2025-04-29T03:10:27.809439399Z	> Build error occurred
2025-04-29T03:10:27.813548512Z	Error: The 'public' directory is reserved in Next.js and can not be set as the 'distDir'. https://nextjs.org/docs/messages/can-not-output-to-public
2025-04-29T03:10:27.813737369Z	    at Array.reduce (<anonymous>)
2025-04-29T03:10:27.831877536Z	Failed: Error while executing user command. Exited with error code: 1
2025-04-29T03:10:27.840938654Z	Failed: build command exited with code: 1
2025-04-29T03:10:28.881669Z	Failed: error occurred while running build command