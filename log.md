2025-04-29T02:57:16.958156Z	Cloning repository...
2025-04-29T02:57:17.56351Z	From https://github.com/cnmzsjbz199328/businessService
2025-04-29T02:57:17.563968Z	 * branch            2d1f53dd3a59052c78a12062850171b510feaf78 -> FETCH_HEAD
2025-04-29T02:57:17.564073Z	
2025-04-29T02:57:17.592222Z	HEAD is now at 2d1f53d Refactor ResultsPage component and add CSV export functionality; remove unused next.config.ts
2025-04-29T02:57:17.5926Z	
2025-04-29T02:57:17.672039Z	
2025-04-29T02:57:17.67253Z	Using v2 root directory strategy
2025-04-29T02:57:17.692877Z	Success: Finished cloning repository files
2025-04-29T02:57:19.457802Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-04-29T02:57:19.458423Z	
2025-04-29T02:57:20.585773Z	No wrangler.toml file found. Continuing.
2025-04-29T02:57:20.663279Z	Detected the following tools from environment: nodejs@20.0.0, npm@9.6.7
2025-04-29T02:57:20.663981Z	Installing nodejs 20.0.0
2025-04-29T02:57:21.678617Z	Trying to update node-build... ok
2025-04-29T02:57:21.783375Z	To follow progress, use 'tail -f /tmp/node-build.20250429025721.486.log' or pass --verbose
2025-04-29T02:57:21.884176Z	Downloading node-v20.0.0-linux-x64.tar.gz...
2025-04-29T02:57:22.159616Z	-> https://nodejs.org/dist/v20.0.0/node-v20.0.0-linux-x64.tar.gz
2025-04-29T02:57:23.840866Z	
2025-04-29T02:57:23.841141Z	WARNING: node-v20.0.0-linux-x64 is in LTS Maintenance mode and nearing its end of life.
2025-04-29T02:57:23.841267Z	It only receives *critical* security updates, *critical* bug fixes and documentation updates.
2025-04-29T02:57:23.84137Z	
2025-04-29T02:57:23.841466Z	Installing node-v20.0.0-linux-x64...
2025-04-29T02:57:24.228582Z	Installed node-v20.0.0-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/20.0.0
2025-04-29T02:57:24.228831Z	
2025-04-29T02:57:25.246188Z	Installing project dependencies: npm clean-install --progress=false
2025-04-29T02:57:26.114719Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.115009Z	npm WARN EBADENGINE   package: '@eslint/config-array@0.20.0',
2025-04-29T02:57:26.115173Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.115302Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.115422Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.115572Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.115689Z	npm WARN EBADENGINE   package: '@eslint/config-helpers@0.2.1',
2025-04-29T02:57:26.115791Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.115904Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.11601Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.116156Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.116284Z	npm WARN EBADENGINE   package: '@eslint/core@0.12.0',
2025-04-29T02:57:26.116437Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.116594Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.116734Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.11686Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.116967Z	npm WARN EBADENGINE   package: '@eslint/eslintrc@3.3.1',
2025-04-29T02:57:26.117107Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.117237Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.117342Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.117823Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.117993Z	npm WARN EBADENGINE   package: '@eslint/js@9.24.0',
2025-04-29T02:57:26.118081Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.118186Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.11829Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.118572Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.118742Z	npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.6',
2025-04-29T02:57:26.11885Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.11896Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.119071Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.119282Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.119477Z	npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.8',
2025-04-29T02:57:26.11964Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.119761Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.119909Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.120328Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.120483Z	npm WARN EBADENGINE   package: '@eslint/core@0.13.0',
2025-04-29T02:57:26.120641Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.12075Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.120846Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.121748Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.121902Z	npm WARN EBADENGINE   package: '@typescript-eslint/eslint-plugin@8.29.1',
2025-04-29T02:57:26.122005Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.122104Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.122241Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.122345Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.122479Z	npm WARN EBADENGINE   package: '@typescript-eslint/parser@8.29.1',
2025-04-29T02:57:26.12265Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.122763Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.122872Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.12295Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.123011Z	npm WARN EBADENGINE   package: '@typescript-eslint/scope-manager@8.29.1',
2025-04-29T02:57:26.123193Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.123315Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.123461Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.123546Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.123762Z	npm WARN EBADENGINE   package: '@typescript-eslint/type-utils@8.29.1',
2025-04-29T02:57:26.123937Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.124069Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.124226Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.124403Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.12466Z	npm WARN EBADENGINE   package: '@typescript-eslint/types@8.29.1',
2025-04-29T02:57:26.124762Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.125215Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.1253Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.125388Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.125485Z	npm WARN EBADENGINE   package: '@typescript-eslint/typescript-estree@8.29.1',
2025-04-29T02:57:26.125597Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.125705Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.125819Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.125949Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.126101Z	npm WARN EBADENGINE   package: '@typescript-eslint/utils@8.29.1',
2025-04-29T02:57:26.126208Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.126298Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.126396Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.126481Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.126591Z	npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@8.29.1',
2025-04-29T02:57:26.126692Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.126789Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.126867Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.126965Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.127095Z	npm WARN EBADENGINE   package: 'eslint@9.24.0',
2025-04-29T02:57:26.127212Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.127305Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.127402Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.127497Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.127605Z	npm WARN EBADENGINE   package: 'eslint-scope@8.3.0',
2025-04-29T02:57:26.127701Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.127798Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.127894Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.127991Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.128083Z	npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.2.0',
2025-04-29T02:57:26.128188Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.128282Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.12837Z	npm WARN EBADENGINE }
2025-04-29T02:57:26.128464Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T02:57:26.128579Z	npm WARN EBADENGINE   package: 'espree@10.3.0',
2025-04-29T02:57:26.128659Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T02:57:26.128755Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T02:57:26.128858Z	npm WARN EBADENGINE }
2025-04-29T02:57:43.702079Z	
2025-04-29T02:57:43.702312Z	added 406 packages, and audited 407 packages in 18s
2025-04-29T02:57:43.702412Z	
2025-04-29T02:57:43.702475Z	150 packages are looking for funding
2025-04-29T02:57:43.702589Z	  run `npm fund` for details
2025-04-29T02:57:43.703221Z	
2025-04-29T02:57:43.703385Z	found 0 vulnerabilities
2025-04-29T02:57:43.721553Z	Executing user command: npm run build
2025-04-29T02:57:44.362639Z	
2025-04-29T02:57:44.362932Z	> product-market-analysis@0.1.0 build
2025-04-29T02:57:44.363089Z	> next build
2025-04-29T02:57:44.36323Z	
2025-04-29T02:57:45.032683Z	 ⚠ Invalid next.config.mjs options detected: 
2025-04-29T02:57:45.033303Z	 ⚠     Unrecognized key(s) in object: 'swcMinify'
2025-04-29T02:57:45.033739Z	 ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
2025-04-29T02:57:45.034972Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-04-29T02:57:45.039057Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-04-29T02:57:45.039238Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-04-29T02:57:45.039362Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-04-29T02:57:45.039457Z	https://nextjs.org/telemetry
2025-04-29T02:57:45.039593Z	
2025-04-29T02:57:45.109063Z	   ▲ Next.js 15.3.0
2025-04-29T02:57:45.10926Z	
2025-04-29T02:57:45.16185Z	   Creating an optimized production build ...
2025-04-29T02:57:54.528818Z	 ✓ Compiled successfully in 6.0s
2025-04-29T02:57:54.532874Z	   Skipping validation of types
2025-04-29T02:57:54.533099Z	   Skipping linting
2025-04-29T02:57:54.819306Z	   Collecting page data ...
2025-04-29T02:57:56.731779Z	   Generating static pages (0/6) ...
2025-04-29T02:57:57.489163Z	   Generating static pages (1/6) 
2025-04-29T02:57:57.489448Z	   Generating static pages (2/6) 
2025-04-29T02:57:57.489606Z	   Generating static pages (4/6) 
2025-04-29T02:57:57.489723Z	 ✓ Generating static pages (6/6)
2025-04-29T02:57:57.942876Z	   Finalizing page optimization ...
2025-04-29T02:57:57.943154Z	   Collecting build traces ...
2025-04-29T02:58:08.269655Z	
2025-04-29T02:58:08.273241Z	Route (app)                                 Size  First Load JS
2025-04-29T02:58:08.273464Z	┌ ○ /                                    3.35 kB         104 kB
2025-04-29T02:58:08.273643Z	├ ○ /_not-found                            978 B         102 kB
2025-04-29T02:58:08.273758Z	└ ○ /results                             76.5 kB         178 kB
2025-04-29T02:58:08.273872Z	+ First Load JS shared by all             101 kB
2025-04-29T02:58:08.274007Z	  ├ chunks/4bd1b696-e6f055947a7dc434.js  53.2 kB
2025-04-29T02:58:08.274148Z	  ├ chunks/684-2f2bced80b6b48ec.js         46 kB
2025-04-29T02:58:08.27426Z	  └ other shared chunks (total)          1.91 kB
2025-04-29T02:58:08.274584Z	
2025-04-29T02:58:08.274707Z	
2025-04-29T02:58:08.274828Z	○  (Static)  prerendered as static content
2025-04-29T02:58:08.274963Z	
2025-04-29T02:58:08.308365Z	Finished
2025-04-29T02:58:09.202977Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-04-29T02:58:09.2036Z	
2025-04-29T02:58:10.344582Z	No wrangler.toml file found. Continuing.
2025-04-29T02:58:10.345472Z	Note: No functions dir at /functions found. Skipping.
2025-04-29T02:58:10.345655Z	Validating asset output directory
2025-04-29T02:58:11.358093Z	
2025-04-29T02:58:11.47021Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mError: Pages only supports files up to 25 MiB in size[0m
2025-04-29T02:58:11.47059Z	
2025-04-29T02:58:11.470741Z	  cache/webpack/client-production/0.pack is 27.6 MiB in size
2025-04-29T02:58:11.47097Z	
2025-04-29T02:58:11.471102Z	
2025-04-29T02:58:11.783213Z	🪵  Logs were written to "/root/.config/.wrangler/logs/wrangler-2025-04-29_02-58-11_092.log"
2025-04-29T02:58:11.800545Z	Failed to validate assets in the output directory with code: 1
2025-04-29T02:58:13.070041Z	Failed: error occurred while validating assets in your output directory. Check the logs above for more information.