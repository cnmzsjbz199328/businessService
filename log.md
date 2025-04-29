2025-04-29T03:05:51.946306Z	Cloning repository...
2025-04-29T03:05:52.570602Z	From https://github.com/cnmzsjbz199328/businessService
2025-04-29T03:05:52.571056Z	 * branch            f515fe04ed25746b805b34f851105bbac311a0f6 -> FETCH_HEAD
2025-04-29T03:05:52.57119Z	
2025-04-29T03:05:52.600261Z	HEAD is now at f515fe0 Remove unused image files and update build scripts in package.json
2025-04-29T03:05:52.600713Z	
2025-04-29T03:05:52.681185Z	
2025-04-29T03:05:52.681641Z	Using v2 root directory strategy
2025-04-29T03:05:52.705005Z	Success: Finished cloning repository files
2025-04-29T03:05:54.434825Z	Checking for configuration in a Wrangler configuration file (BETA)
2025-04-29T03:05:54.435473Z	
2025-04-29T03:05:55.585054Z	No wrangler.toml file found. Continuing.
2025-04-29T03:05:55.664713Z	Detected the following tools from environment: nodejs@20.0.0, npm@9.6.7
2025-04-29T03:05:55.665402Z	Installing nodejs 20.0.0
2025-04-29T03:05:56.748318Z	Trying to update node-build... ok
2025-04-29T03:05:56.854517Z	To follow progress, use 'tail -f /tmp/node-build.20250429030556.486.log' or pass --verbose
2025-04-29T03:05:56.956444Z	Downloading node-v20.0.0-linux-x64.tar.gz...
2025-04-29T03:05:57.307405Z	-> https://nodejs.org/dist/v20.0.0/node-v20.0.0-linux-x64.tar.gz
2025-04-29T03:05:59.2689Z	
2025-04-29T03:05:59.269247Z	WARNING: node-v20.0.0-linux-x64 is in LTS Maintenance mode and nearing its end of life.
2025-04-29T03:05:59.269398Z	It only receives *critical* security updates, *critical* bug fixes and documentation updates.
2025-04-29T03:05:59.269491Z	
2025-04-29T03:05:59.2696Z	Installing node-v20.0.0-linux-x64...
2025-04-29T03:05:59.675557Z	Installed node-v20.0.0-linux-x64 to /opt/buildhome/.asdf/installs/nodejs/20.0.0
2025-04-29T03:05:59.675867Z	
2025-04-29T03:06:00.814219Z	Installing project dependencies: npm clean-install --progress=false
2025-04-29T03:06:01.697851Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.69819Z	npm WARN EBADENGINE   package: '@eslint/config-array@0.20.0',
2025-04-29T03:06:01.698437Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.69853Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.698591Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.698666Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.698722Z	npm WARN EBADENGINE   package: '@eslint/config-helpers@0.2.1',
2025-04-29T03:06:01.698838Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.698905Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.698975Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.699068Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.699136Z	npm WARN EBADENGINE   package: '@eslint/core@0.12.0',
2025-04-29T03:06:01.699231Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.699294Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.699359Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.699656Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.69981Z	npm WARN EBADENGINE   package: '@eslint/eslintrc@3.3.1',
2025-04-29T03:06:01.699945Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.700081Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.700204Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.700299Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.700366Z	npm WARN EBADENGINE   package: '@eslint/js@9.24.0',
2025-04-29T03:06:01.700428Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.700486Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.700546Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.700634Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.700692Z	npm WARN EBADENGINE   package: '@eslint/object-schema@2.1.6',
2025-04-29T03:06:01.70075Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.70081Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.700864Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.700923Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.700978Z	npm WARN EBADENGINE   package: '@eslint/plugin-kit@0.2.8',
2025-04-29T03:06:01.701086Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.701192Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.70132Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.701444Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.701539Z	npm WARN EBADENGINE   package: '@eslint/core@0.13.0',
2025-04-29T03:06:01.701666Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.70177Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.701871Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.70198Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.702102Z	npm WARN EBADENGINE   package: '@typescript-eslint/eslint-plugin@8.29.1',
2025-04-29T03:06:01.702199Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.702287Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.702405Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.702536Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.70263Z	npm WARN EBADENGINE   package: '@typescript-eslint/parser@8.29.1',
2025-04-29T03:06:01.70275Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.702852Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.702947Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.703175Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.703341Z	npm WARN EBADENGINE   package: '@typescript-eslint/scope-manager@8.29.1',
2025-04-29T03:06:01.703456Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.703568Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.703669Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.703784Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.703904Z	npm WARN EBADENGINE   package: '@typescript-eslint/type-utils@8.29.1',
2025-04-29T03:06:01.7041Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.704189Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.704286Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.704415Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.704529Z	npm WARN EBADENGINE   package: '@typescript-eslint/types@8.29.1',
2025-04-29T03:06:01.706844Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.707098Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.707321Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.707413Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.707561Z	npm WARN EBADENGINE   package: '@typescript-eslint/typescript-estree@8.29.1',
2025-04-29T03:06:01.707735Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.707855Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.707953Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.708092Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.708199Z	npm WARN EBADENGINE   package: '@typescript-eslint/utils@8.29.1',
2025-04-29T03:06:01.708261Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.708317Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.708377Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.708448Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.708656Z	npm WARN EBADENGINE   package: '@typescript-eslint/visitor-keys@8.29.1',
2025-04-29T03:06:01.708718Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.708785Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.708921Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.709579Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.709823Z	npm WARN EBADENGINE   package: 'eslint@9.24.0',
2025-04-29T03:06:01.709986Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.710122Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.710226Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.710335Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.710579Z	npm WARN EBADENGINE   package: 'eslint-scope@8.3.0',
2025-04-29T03:06:01.710721Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.710837Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.710937Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.711044Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.711155Z	npm WARN EBADENGINE   package: 'eslint-visitor-keys@4.2.0',
2025-04-29T03:06:01.711267Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.711359Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.711466Z	npm WARN EBADENGINE }
2025-04-29T03:06:01.711556Z	npm WARN EBADENGINE Unsupported engine {
2025-04-29T03:06:01.71167Z	npm WARN EBADENGINE   package: 'espree@10.3.0',
2025-04-29T03:06:01.711779Z	npm WARN EBADENGINE   required: { node: '^18.18.0 || ^20.9.0 || >=21.1.0' },
2025-04-29T03:06:01.711886Z	npm WARN EBADENGINE   current: { node: 'v20.0.0', npm: '9.6.4' }
2025-04-29T03:06:01.711994Z	npm WARN EBADENGINE }
2025-04-29T03:06:20.183731Z	
2025-04-29T03:06:20.183954Z	added 406 packages, and audited 407 packages in 19s
2025-04-29T03:06:20.184164Z	
2025-04-29T03:06:20.184277Z	150 packages are looking for funding
2025-04-29T03:06:20.184386Z	  run `npm fund` for details
2025-04-29T03:06:20.184999Z	
2025-04-29T03:06:20.185176Z	found 0 vulnerabilities
2025-04-29T03:06:20.197607Z	Executing user command: npm run cloudflare
2025-04-29T03:06:20.879652Z	
2025-04-29T03:06:20.879942Z	> product-market-analysis@0.1.0 cloudflare
2025-04-29T03:06:20.880122Z	> next build && next export -o public
2025-04-29T03:06:20.880253Z	
2025-04-29T03:06:21.543342Z	 ⚠ Invalid next.config.mjs options detected: 
2025-04-29T03:06:21.543711Z	 ⚠     Unrecognized key(s) in object: 'swcMinify'
2025-04-29T03:06:21.543825Z	 ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
2025-04-29T03:06:21.545969Z	⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
2025-04-29T03:06:21.55033Z	Attention: Next.js now collects completely anonymous telemetry regarding usage.
2025-04-29T03:06:21.550511Z	This information is used to shape Next.js' roadmap and prioritize features.
2025-04-29T03:06:21.550777Z	You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2025-04-29T03:06:21.550875Z	https://nextjs.org/telemetry
2025-04-29T03:06:21.550968Z	
2025-04-29T03:06:21.619354Z	   ▲ Next.js 15.3.0
2025-04-29T03:06:21.619746Z	
2025-04-29T03:06:21.674324Z	   Creating an optimized production build ...
2025-04-29T03:06:30.927066Z	 ✓ Compiled successfully in 6.0s
2025-04-29T03:06:30.931394Z	   Skipping validation of types
2025-04-29T03:06:30.931556Z	   Skipping linting
2025-04-29T03:06:31.220174Z	   Collecting page data ...
2025-04-29T03:06:33.14931Z	   Generating static pages (0/6) ...
2025-04-29T03:06:33.880025Z	   Generating static pages (1/6) 
2025-04-29T03:06:33.880315Z	   Generating static pages (2/6) 
2025-04-29T03:06:33.880449Z	   Generating static pages (4/6) 
2025-04-29T03:06:33.880558Z	 ✓ Generating static pages (6/6)
2025-04-29T03:06:34.351645Z	   Finalizing page optimization ...
2025-04-29T03:06:34.351912Z	   Collecting build traces ...
2025-04-29T03:06:44.645887Z	
2025-04-29T03:06:44.64917Z	Route (app)                                 Size  First Load JS
2025-04-29T03:06:44.649393Z	┌ ○ /                                    3.35 kB         104 kB
2025-04-29T03:06:44.649516Z	├ ○ /_not-found                            978 B         102 kB
2025-04-29T03:06:44.649646Z	└ ○ /results                             76.5 kB         178 kB
2025-04-29T03:06:44.649766Z	+ First Load JS shared by all             101 kB
2025-04-29T03:06:44.649886Z	  ├ chunks/4bd1b696-e6f055947a7dc434.js  53.2 kB
2025-04-29T03:06:44.650008Z	  ├ chunks/684-2f2bced80b6b48ec.js         46 kB
2025-04-29T03:06:44.650139Z	  └ other shared chunks (total)          1.91 kB
2025-04-29T03:06:44.650435Z	
2025-04-29T03:06:44.65057Z	
2025-04-29T03:06:44.650681Z	○  (Static)  prerendered as static content
2025-04-29T03:06:44.650783Z	
2025-04-29T03:06:44.813658Z	error: unknown option '-o'
2025-04-29T03:06:44.827508Z	Failed: Error while executing user command. Exited with error code: 1
2025-04-29T03:06:44.836318Z	Failed: build command exited with code: 1
2025-04-29T03:06:46.019219Z	Failed: error occurred while running build command