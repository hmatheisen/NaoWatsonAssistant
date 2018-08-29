<?xml version="1.0" encoding="UTF-8" ?>
<Package name="NaoWatsonAssistant" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="WatsonSTT" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs />
    <Resources>
        <File name="swiftswords_ext" src="WatsonSTT/swiftswords_ext.mp3" />
        <File name="choice_sentences" src="WatsonSTT/Aldebaran/choice_sentences.xml" />
    </Resources>
    <Topics />
    <IgnoredPaths>
        <Path src=".DS_Store" />
    </IgnoredPaths>
</Package>
