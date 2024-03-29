---
sidebar_position: 50
---

# How To Setup RedBot on AMP

:::info

This is not officially supported by Cubecoders support and AMP so please send any issues to [My Github](https://github.com/ssfdre38/AMPTemplates/issues)

:::

:::info
This is only for Linux versions of AMP right now and will be working on setting it up for Windows soon.
:::

:::note
The Official way is done with the Python App Runner on AMP and you can follow [The Offical Python App Runner Guide](https://discourse.cubecoders.com/t/python-app-runner-guide/7420#h-2-red-discord-bot-5) on how to do it.
:::

## Configuring Amp to see RedBot

First thing you need to do is to add my GitHub Repo to your panel.
Go to your panel and then go to Configuration > Instance Deployment and then add my repo in Configuration Repositories.
You will press add and add this to it

```bash
ssfdre38/AMPTemplates:dev
```
And press Fetch Latest.

There you will go back to the Instances page on the main part of your AMP Panel and then you will see.

```bash
ssfdre38 / RedBot - A Discord Bot
```

:::info
This is built for Linux only Using Docker. Please follow [How To Install Docker to AMP](https://discourse.cubecoders.com/t/configuring-amp-to-use-docker-for-instances/1957) on how to setup Docker for Linux.

This is using a custom Docker container for AMP so please use the container it comes with.
```bash
ssfdre38/ampdocker:RedBot
```
:::

## Configuring Redbot

Now you would go to Configuration and then you will see a new menu item called Bot Settings.

You would need to add a Discord Token for RedBot to see Discord go to [Discord Developers](https://discord.com/developers/applications/) to make a new Application for Redbot

The Prefix default is set to ! but you can change it to what ever you would like to use but note that / is not currently usable.

Bot owner is you. You would go to your Discord and then click on your user name and click on Copy User ID and add it there.

Bot Co-owner is other people you trust with Redbot. You would do the same thing with them. If you don't have anyone else then add your Discord User ID in there as well.

## Starting RedBot and adding it to Discord

Now you would go to the Console Tab on the Redbot Panel and then press Update. You will see a whole lot of lines come in but that is normal as its installing RedBot and all its dependines.
Once that is done, you will press start and then see an Invite URL. Just copy that URL and paste it into your brower and that will add RedBot to your Discord.