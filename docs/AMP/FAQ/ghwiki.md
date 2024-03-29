---
sidebar_position: 10
---

# GitHub Wiki Generic Module

The Generic module in AMP allows you to run applications for which no specific AMP module already exists. It takes a lot of configuration to tell it how to update, start and monitor the application.

You can find existing configurations here: [Generic module templates](https://github.com/CubeCoders/AMPTemplates)

You'll need to edit `GenericModule.kvp` with a text editor such as Notepad++. The configuration is split into three sections: Application, Console and Meta

***

## Online Configuration Generator

We have supplied an [online configuration tool](https://config.getamp.sh/)* to help you produce these configurations - Not all features of the Generic module are supported at this time, but it can handle many use cases and is a great starting point to then expand upon.

*There is a much more robust version of the [online configuration tool](https://iceofwraith.github.io/GenericConfigGen/) that is still in beta. This should provide much better results than the above even so. If you have any feedback, please contact IceOfWraith in the CubeCoders Discord.

***

## Adding custom templates to Github

Community Contributors can upload their templates to Github in order to use them within AMP, share directly, or create a pull request to merge into the official CubeCoders repo. The template will be included in a default AMP install if the pull request is accepted.

1. Fork the [Generic module templates](https://github.com/CubeCoders/AMPTemplates) repo.
2. Modify the `manifest.json` inside the repo. The following must be unique to your setup: `id`, `origin`, `url`, and `prefix`. This file must be reverted or excluded from a pull request if merging into the main CubeCoders repo.
3. Using Github Desktop, or a similar tool, upload the new files/changes to your repository.

***

## Adding custom templates to AMP

If the template creator has followed the steps above, you can add the files into your own AMP install.

1. Grab the URL of the repository you are wanting to add. We'll use the experimental branch in this example: `https://github.com/CubeCoders/AMPTemplates/tree/experimental`
2. In AMP, navigate to `Configuration -> Instance Deployment` and `Add` a `Configuration Repository`.
3. Paste in the new repository in this format - user/repo:branch. This would be CubeCoders/AMPTemplates:experimental in the example above.
4. Click the `Fetch` button.
5. Refresh the browser.
6. Any configs that are new will show up when adding a new instance with a prefix determined by the config's creator.

***

## Using custom Docker images

On Linux, if your application has a high number of extra dependencies that may be undesirable to install on the host system (such as NodeJS or extra databases/caching layers such as MongoDB or Redis) you can build your own Docker containers based on the standard base image and have AMP use that: See [Using custom Docker images with AMP and the generic module](Using-custom-Docker-images-with-AMP-and-the-generic-module).

***

## Information about using SteamCMD to update

The SteamCMD plugin will place the actual downloaded server data in a directory whose name is the app ID. This means you'll need to include this in your working directory and executable filenames.

***

## Regular Expressions

AMP uses regular expressions to match incoming messages. All such expressions must capture the entire string to be valid, so they must always start with a `^` and end with a `$`. AMP uses the Javascript Regex flavour and so supports (and in cases requires) the use of named capture groups. For example `^(?<username>.+?) has joined\.$` creates a capture group called `username` that contains any text from the start of the line up until the first space.

[Regex101](https://regex101.com) is an excellent in-browser tool for writing and testing regular expressions.

***

## Application

|Field|Description|
|-----|-----|
|DisplayName|The name of the application as is displayed in AMP|
|RootDir|The root direction that the application is to be run from|
|WorkingDir|The working directory to be used by the executable.  It can either be a relative path from RootDir or an absolute path|
|ExecutableWin|The filename that is to be started if the OS is Windows. It can either be a relative path from RootDir or an absolute path|
|ExecutableLinux|The filename that is to be started if the OS is Linux. It can either be a relative path from RootDir or an absolute path|
|Compatibility|This setting applies special compatibility tweaks to allow AMP to work with certain misbehaving applications. Values can be combined by adding them together.<br/><br/>• 0 - None<br/>• 1 - Linux buffered console<br/>• 2 - Windows Buffered Console<br/>• 4 - Windows Unity Compatibility|
|CommandLineArgs|The command line arguments to be used. Extra values from AppSettings can be substituted in by enclosing their names in double-curly braces. E.g. `-Map {{Map}}` - Settings from this table may be included by prefixing their name with a $ E.g. `-MaxPlayers {{$MaxUsers}} -Port {{$ApplicationPort1}}. You can also use {{$FormattedArgs}} to have automatically generated command line flags`|
|AppSettings|A JSON formatted dictionary of variable names and their values. These can be useful in CommandLineArgs and metaconfig files (Will not work with AutoMap). E.g. `App.AppSettings={"MaxPlayers": 4, "Port": 27100}`
|EnvironmentVariables|A dictionary of environment variables and values, same syntax as AppSettings|
|CommandLineParameterFormat|The format to be used for automatically generated command line flags, where {0} is the key and {1} is the value. By default this is `+{0} "{1}"` which might output for example `+ServerIP "0.0.0.0"`|
|ExitMethod|Determines how to stop the application. Must be one of the following:<br/><br/>• Kill - Kills the process outright<br/>• EndStream - Closes the standard input stream<br/>• CtrlC - Sends a CTRL+C to the standard input stream<br/>• CtrlD - Sends a CTRL+D to the standard input stream<br/>• Esc - Sends an escape character to the standard input stream<br/>• String - Sends the value of the ExitString setting to standard input/rcon.<br/>• SIGTERM - Sends a SIGTERM signal to the process (Linux Only)<br/>• SIGKILL - Sends a SIGKILL signal to the process (Linux Only)<br/>• WM_CLOSE - Attempts to send a close signal to the applications main window (Windows Only)<br/>• OS_CLOSE - Sends a SIGINT on Linux, and a WM_EXIT on Windows.|
|ExitString|The string to be sent the standard input or RCON to stop the application if the `ExitMethod` is set to `String`|
|HasWriteableConsole|Whether or not the application can have its console written to via standard input. True or False|
|HasReadableConsole|Whether or not the application can have its console read from via standard output. True or False|
|IgnoreSTDOUTAfterRCON|After the app reaches a ready state and RCON is connected this will disable HasReadableConsole to remove duplicated output from console and RCON.|
|ApplicationIPBinding|The IP Address that the application will be bound to|
|ForceIPBinding|This requires the user to select an IP before startup on apps that need an IP to be set rather than 0.0.0.0 or 127.0.0.1.|
|SupportsIPv6|Allows the app to be bound to an IPv6 address. Only IPv4 is able to be used by default.|
|ExternalIP|The External IP Address of the server|
|ApplicationPort1|The first port that the application needs to use. AMP will reserve both TCP and UDP|
|ApplicationPort2|The second port that the application needs to use. AMP will reserve both TCP and UDP|
|ApplicationPort3|The third port that the application needs to use. AMP will reserve both TCP and UDP|
|RemoteAdminPort|When using RCON based Admin Methods, this is the port AMP will connect to the appplication on|
|RemoteAdminPassword|Password used for RCON connections|
|UseRandomAdminPassword|If set to true, a randomly generated admin password will be used each start, replacing the value in RandomAdminPassword - recommended for insecure protocols|
|AdminLoginTransform|None/MD5 - Converts the RemoteAdminPassword to an MD5 hash. This is only used when the RCON method requires it.|
|MaxUsers|The maximum number of users supported by the application|
|AdminMethod|How AMP will interact with the application to provide a console. Must be one of the following:<br/><br/>• STDIO<br/>• SourceRCON<br/>• TelnetRCON<br/>• QuakeRCON<br/>• BattlEyeRCON<br/>• WebRCON<br/>• PinballWizard (Application is deaf, dumb and blind)|
|UpdateSources|An array of Update Source objects to allow for applications that require multiple stages to perform an update. See 'Update Sources' below.|
|UDPLogger|true/false - For SRCDS/HLDS games that are able to utilize the `+logaddress_add` parameter. AMP will automatically add the parameter. Disable 'HasReadableConsole' to avoid duplicated output.|
|SteamUpdateAnonymousLogin|true/false - Whether or not the application can be downloaded anonymously when using SteamCMD|
|SteamForceWindowsVersion|true/false - If true, AMP will explicitly try and download a Windows version of the application, regardless of what platform it is running on|
|SteamForceLoginPrompt|true/false - If true, AMP will always try and prompt for a steam login without waiting to see if one is required.|
|SupportsIPv6|true/false - If true, AMP will allow the use of IPv6 addresses. If false, users receive an alert when attempting to start the app with an IPv6 address binding.
|RapidStartup|true/false - If true, AMP will not show a progress indicator for startups or shutdowns. For applications that complete their startup sequence within a few seconds.|
|MonitorChildProcessName|When using Wine, allows a second process to be monitored for CPU/Memory usage, as well as, for shutting down the server cleanly.|

***

## Update Sources

The update sources is a JSON object array defining a set of steps that AMP will perform when performing an update.

|Field|Description|
|-|-|
|UpdateStageName|The name of this current update step as displayed to the user.|
|UpdateSourcePlatform|The OS that this update stage is performed on. Used to allow different stages/steps for different OSs within the same configuration. Acceptable values are "Windows", "Linux" or "All"|
|UpdateSource|How AMP will update the application. Must be one of the following:<br/><br/>• None<br/>• FetchURL - Downloads from a fixed URL set by UpdateSourceData to the RootDir<br/>• CopyFilePath - Copies a file from UpdateSourceData to the RootDir.<br/>• SteamCMD - Downloads an application whose app ID is set in UpdateSourceData and whose client app ID (Used for Workshop) is in UpdateSourceArgs into the RootDir<br/>• Executable - Runs an executable/shell script (not bat files!) whose name is defined in UpdateSourceData and arguments from UpdateSourceArgs<br/>• GithubRelease - Downloads the release version specified in UpdateSourceVersion (the latest release if omitted) from a GitHub repo where the repo author/name is defined in UpdateSourceArgs and the specific file to download is in UpdateSourceData. If you omit the UpdateSourceData AMP will try and work out the filename automatically by using the first asset found for the latest release.<br/>• SetExecutableFlag - Linux only, marks the filename listed in UpdateSourceArgs as executable.<br/>• CreateSymlink - Linux only, Creates a symlink pointing to the file/directory listed in UpdateSourceArgs with the name/location specified in UpdateSourceData<br/>• StartApplication - Starts the application for the first time. This may be useful if a game generates directories and config files on first start.<br/>• WaitForStartupComplete - Waits for the application to load after using "StartApplication". This is determined by the "ApplicationReadyMode".<br/>• ShutdownApplication - Stops the application after using "StartApplication".|
|UpdateSourceData|The data used by the UpdateSource method as described above|
|UpdateSourceArgs|Executable arguments used when UpdateSource is set to Executable, or the Client App ID when the UpdateSource is SteamCMD|
|UpdateSourceVersion|Additional version information for update sources. Acts as a release tag for GitHub. Used as the 'beta' tag if the UpdateSource is SteamCMD|
|UpdateSourceTarget|For file downloads, where the downloaded file should be saved if it's not to be in the instances Root Directory|
|UpdateSourceExtra|Used to specify the mod to download when using the SteamCMD UpdateSource and HLDS (app 90) as the UpdateSourceData|
|UpdateSourceConditionSetting|Makes the update stage conditional on a particular setting. This is the FieldName of the setting as per the setting spec that you want to check|
|UpdateSourceConditionValue|The value that the setting specified in UpdateSourceConditionSetting should have for this update stage to be applicable.|
|UnzipUpdateSource|If the update source is FetchURL or CopyFilePath, AMP will unzip the target file after downloading/copying it|
|OverwriteExistingFiles|If the update source is FetchURL or CopyFilePath, existing files will be overwritten if this is set to true|

***

### Examples:

A single-stage update step that downloads App ID 896660 from Steam:

    App.UpdateSources=[{"UpdateStageName": "SteamCMD Download","UpdateSourcePlatform": "All", "UpdateSource": "SteamCMD", "UpdateSourceData": "896660"}]

A multi-stage update that downloads App ID 896660 from Steam, and then downloads an extra file from the latest GitHub release for a mod - fetching a different file for each platform (WindowsServer.zip or UnixServer.zip) which get extracted once downloaded.

    App.UpdateSources=[{"UpdateStageName": "SteamCMD Download","UpdateSourcePlatform": "All", "UpdateSource": "SteamCMD", "UpdateSourceData": "896660"},{"UpdateStageName": "Fetch ValheimPlus from Github","UpdateSourcePlatform": "Windows", "UpdateSource": "GithubRelease", "UpdateSourceArgs": "valheimPlus/ValheimPlus", "UpdateSourceData": "WindowsServer.zip", "UnzipUpdateSource": true, "OverwriteExistingFiles": true},{"UpdateSourcePlatform": "Linux", "UpdateSource": "GithubRelease", "UpdateSourceArgs": "valheimPlus/ValheimPlus", "UpdateSourceData": "UnixServer.zip", "UnzipUpdateSource": true, "OverwriteExistingFiles": true}]

With the JSON pretty-printed, the data is as follows:

```
[
  {
    "UpdateStageName": "SteamCMD Download",
    "UpdateSourcePlatform": "All",
    "UpdateSource": "SteamCMD",
    "UpdateSourceData": "896660"
  },
  {
    "UpdateStageName": "Fetch ValheimPlus from Github",
    "UpdateSourcePlatform": "Windows",
    "UpdateSource": "GithubRelease",
    "UpdateSourceArgs": "valheimPlus/ValheimPlus",
    "UpdateSourceData": "WindowsServer.zip",
    "UnzipUpdateSource": true,
    "OverwriteExistingFiles": true
  },
  {
    "UpdateSourcePlatform": "Linux",
    "UpdateSource": "GithubRelease",
    "UpdateSourceArgs": "valheimPlus/ValheimPlus",
    "UpdateSourceData": "UnixServer.zip",
    "UnzipUpdateSource": true,
    "OverwriteExistingFiles": true
  }
]
```

***

## Console

|Field|Description|
|-|-|
|FilterMatchRegex|A regex that replaces any matched string with the string specified in `FilterMatchReplacement`. Useful to clean up messy console output.|
|FilterMatchReplacement|The string to replace the matched string from `FilterMatchRegex` with. If left empty the text will only be removed.|
|AppReadyRegex|A regex that if matched, will change the server state from 'Starting' to 'Running'|
|UserJoinRegex|A regex that indicates when a user has joined. Must use named capture groups, supplying at a minimum a username. Also accepts a userid and a endpoint.|
|UserLeaveRegex||
|UserChatRegex|Regex needs 'username' and 'message' capture groups.|
|ThrowawayMessageRegex|If matched, lines matching this will simply be disposed of, and will not show up in the console or log.|

***

## Meta

These settings don't affect the modules behaviour and are used purely for informational purposes.

|Field|Description|
|-|-|
|DisplayName|The name of the configuration is it will appear in lists of modules.|
|OS|Which OSs are supported, 1 for Windows, 2 for Linux, 3 for both.|
|Author|The name of the author/organisation that produced the configuration|
|URL|A link to an address with further information about the configuration|
|DisplayImageSource|Information on what AMP should use as the image for this application. Acceptable values are:<br/><br/>• steam:12345 (where 12345 is the app ID for the client from the Steam store)<br/>• url:http://example.com/image.png<br/>• none:|
|EndpointURIFormat|If the client can be connected to via a URI (e.g. steam connect URIs), what format it should take. {0} is substituted with the endpoint. E.g. steam://connect/{0}|
|ConfigManifest|If the module has an available configuration manifest, what the default filename is within ADSs store|
|MetaConfigManifest|If the module has an available meta config manifest, what the default filename is within ADSs store|
|ConfigRoot|The name of the kvp file containing this data as it appears within ADSs store|
|SpecificDockerImage|If using a custom docker image for this instance, the name of the image to use. Setting this automatically makes the instance depend on Docker and makes it only usable on Linux.|
|ExtraContainerPackages|A JSON list of extra apps to install in the container on startup. `Meta.ExtraContainerPackages=["app1", "app2", "app3"]`|

***

# Configuration Manifest

Configuration manifests allows AMP to automatically generate an appropriate user interface for an applications various settings. This takes the form of the `configmanifest.json` file in the instances datastore directory. You can find examples of these at the [AMPTemplates](https://github.com/CubeCoders/AMPTemplates) repository.

They consist of an array of setting objects. Below is a fictional example that covers all of the supported setting types: (Note: Comments are not valid in JSON, and exist in this example purely to document. If you copy any of the samples below you should remove any comments.
```tts
	[
		//Plain text field example:
		{
			"DisplayName": "Plain text",
			"Description": "This setting accepts arbritary text as a value.",
			"FieldName": "SomeField",
			"InputType": "text",
			"Category": "Setting Category",
			"IncludeInCommandLine": true,
			"ParamFieldName": "somefield",
			"Hidden": false,
			"DefaultValue": "Some sensible default",
		},
		//Numeric field example:
		{
			"DisplayName": "Numeric",
			"Description": "This setting only accepts numbers.",
			"FieldName": "SomeField",
			"InputType": "number",
			"Category": "Setting Category",
			"IncludeInCommandLine": true,
			"ParamFieldName": "somenumericfield",
			"minValue": "0",
			"maxValue": "100",
			"Hidden": false,
			"DefaultValue": "5"
		}
		//Checkbox example:
		{
			"DisplayName": "Checkbox Example",
			"Description": "Some applications need yes/no ",
			"FieldName": "sometoggle",
			"Category": "Setting Category",
			"ParamFieldName": "sometoggle",
			"InputType": "checkbox",
			"EnumValues": {
			  "False": "0",
			  "True": "1"
			},
			"DefaultValue": "True"
		}
		//Drop down list example:
		{
			"DisplayName": "Single choice option",
			"Description": "The user can select one of the following options",
			"FieldName": "beverage",
			"Category": "Dietary Options",
			"ParamFieldName": "beverage",
			"IncludeInCommandLine": true,
			"InputType": "enum",
			"EnumValues": {
			  "0": "Water",
			  "10": "Cola",
			  "20": "Apple Juice",
			  "999": "Other"
			},
			"DefaultValue": "10"
		},
		//Flag argument example
		{
			"DisplayName": "Flagarg",
			"Category": "Flagargs",
			"Description": "Sets a flag",
			"Keywords": "",
			"FieldName": "flag",
			"InputType": "checkbox",
			"IsFlagArgument": true,
			"ParamFieldName": "flag",
			"IncludeInCommandLine": true,
			"DefaultValue": "-flag"
		},
	];
```


|Settings Object|Description|
|-|-|
|DisplayName|The title displayed for the input.|
|Description|Details of what the input is for.|
|FieldName|This maps the setting to the matching key in the `App.AppSettings` dictionary. If the key doesn't exist, then it'll be created automatically using the value supplied as the `DefaultValue`.|
|Category|This determines what tab the setting will appear under in the left side menu. Settings are automatically grouped together based on their category.|
|InputType|The type of input depends on what values need entered. See the table below for options.|
|minValue|The lowest value allowed for a `number` InputType. Must be a whole number between -2,147,483,648 to 2,147,483,647.|
|maxValue|The highest value allowed for a `number` InputType. Must be a whole number between -2,147,483,648 to 2,147,483,647.|
|IncludeInCommandLine|true/false - If true, then it'll be included automatically by {{$FormattedArgs}}.|
|IsFlagArgument|true/false - If true, for checkbox based settings, the checkbox being on will add the DefaultValue into {{$FormattedArgs}} as-is |
|ParamFieldName|If this setting is included in the formatted command line flags, what the name of the field is. This links to the value in the config file defined in the metaconfig.json file. XPath (XML) and JPath (JSON) may be used for nested values.|
|DefaultValue|The initial value set for the variable when the server is first created.|
|EnumValues|Values to be applied for the "enum" and "checkbox" InputTypes.|
|Hidden|true/false - If true, the input is not visible to the user and not accessible through the API. Useful for mapping AMP variables to config files.|
|Required|true/false - If true, the field must be supplied for the server to start.|
|SkipIfEmpty|true/false - If true, and "IncludeInCommandLine" is true, the key/pair will not be included if the input has a blank value entered.|
|Placeholder|A greyed out value that will display as a hint for users. This value is not the same as a DefaultValue and is not applied.|
|Suffix|This is listed inside the input box on the right side. Should be used for measurements (ms/min/hr/etc).|



|InputType|Description|
|-|-|
|checkbox|A toggle switch with a value mapped for False and True (off and on). Populated by "EnumValues". The left side matches the toggle, the right side is the value assigned. "DefaultValue" matches a value on the right.|
|enum|A drop-down list that is populated by "EnumValues". The left side is the value assigned, the right side is displayed to the user. "DefaultValue" matches a value on the left.|
|number|This input type allows numeric (positive and negative) values.|
|password|This input type allows alphanumeric values. It's recommended to use "RandomPassword" when able. This may be needed for games that only allow certain characters or password lengths.|
|RandomPassword|Provides two buttons: Generate Password and Clear Password. This generates a strong password that is copied to the clipboard on creation.|
|text|The most common input type that allows alphanumeric values.|
|HTML Input Types|Any HTML input type may be used (date, email, URL), but functionality may vary.|

***

# Meta Configuration Manifest

Meta Manifests allow the generic module to produce configuration files in various formats for applications that don't accept command line arguments for configuration. At this time `ini` and kvp-style (`key=value`). If using AutoMap then nested JSON structures are supported.

This data is stored in `metaconfig.json` alongside `configmanifest.json`.

```tts
	[
		{
			"ConfigFile": "ConfigFile.json",
				//If AutoMap is enabled, it is required that the file alreaady exists for AMP to use as a template.
				//AMP will then automatically map the field values based on the ParamFieldName. You can use
				//The JPath syntax (foo.bar.baz) to use if you need to access a nested structure.
			"AutoMap": true,
			"Importable": true
				//If AutoMap and Importable are enabled this will allow users to import settings from an existing config file into AMP. This setting is experimental and supports INI, KVP, JSON, and XML.
		},
		{
			"ConfigFile": "ConfigFile.ini", //AMP automatically guesses the type of file based on the extension
			"Subsections": [
				{
					"Heading": "Network",
					"SettingMappings": {
						"IP": "ServerIP",		//The key maps to the key in App.AppSettings, the value is what
						"Port": "ServerPort"	//will be used as the setting name in the resulting ini file.
					}
				},
				{
					"Heading": "Gameplay",
					"SettingMappings": {
						"MaxPlayers": "MaxPlayers",
						"EnableSomething": "SomethingIsEnabled"
					}
				}
			]
		},
		{
			"ConfigFile": "server.properties",	//AMP can't guess the config file type, so we tell it on the next line
			"ConfigType": "kvp",				//Acceptable values are "auto", "ini" and "kvp"
			"ConfigFormat": "{0}={1}",   //{0} is replaced with the setting key and {1} with the value.
			"Subsections": [
				{
					"Heading": "$root",			//Ini files have multiple headings, but KVP files don't. Use $root in
					"SettingMappings": {		//this cirucumstance and only have on set of categores.
						"IP": "ServerIP",
						"Port": "ServerPort"
					}
				}
			]
		}
	]
```
***

# Using Proton to run Windows-only servers on Linux

You can adapt a Windows-only configuration to run on Linux by using Proton - VALVe's Windows compatibility layer.

This example assumes we're using Proton 6.3 which has a Steam App ID of **_1580130_**. If the application requires a different version, you should look up the steam app ID for it and replace that number with it everywhere in the below samples.

## Command line flags

Add a Linux-specific command line flag to invoke Proton with:

    App.LinuxCommandLineArgs=run {{$ExecutableWin}}
    App.ExecutableLinux=1580130/proton

Then add `{{$PlatformArgs}}` to the start of your main arguments:

    App.CommandLineArgs={{$PlatformArgs}} .......

We then adjust `App.EnvironmentVariables` to add the `STEAM_COMPAT_DATA_PATH` and  `STEAM_COMPAT_CLIENT_INSTALL_PATH` variables as follows:

    App.EnvironmentVariables={"LD_LIBRARY_PATH": "./linux64:%LD_LIBRARY_PATH%", "SteamAppId": "{{$SteamAppID}}", "STEAM_COMPAT_DATA_PATH": "{{$FullRootDir}}1580130", "STEAM_COMPAT_CLIENT_INSTALL_PATH": "{{$FullRootDir}}1580130"}

## Update Stages

If the application is downloaded using SteamCMD, then you need to add the `"ForceDownloadPlatform": "Windows"` flag to the existing download stage to force SteamCMD to download the Windows Version. E.g.

    {"UpdateStageName": "SteamCMD Download","UpdateSourcePlatform": "All", "UpdateSource": "SteamCMD", "UpdateSourceData": "728470", "ForceDownloadPlatform": "Windows"}

Then we need to add an additional platform-specific stage to download Proton using the same AppID as before:

    {"UpdateStageName": "Proton Compatibility Layer", "UpdateSourcePlatform": "Linux", "UpdateSource": "SteamCMD", "UpdateSourceData":"1580130"}

This should go at the end so the first update stage remains the actual game server itself.