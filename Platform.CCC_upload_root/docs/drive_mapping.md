# Drive Mapping

This file maps the inspected Google Drive folder layout to the Platform.CCC repo model.

## Root folders inspected

```text
Create Your Collective.Platform
Create Your Collective.CCC
Create Your Collective.Library
Create Your Collective.Archive
```

## Platform folder

```text
Create Your Collective.Platform/
├── CreativeCollection.Registry
└── CreativeCollection.Data
```

### Registry files observed

```text
Master Registry
CCC Registry
DAWC Registry
DAWCC Registry
EMC^2 Registry
JOY Registry
Registry Template
```

### Data bridge folders observed

```text
CreativeCollection.Data/
├── CCC.Drive<>Repo
├── CCC.Drive<>Dash
└── CCC.Drive<>Drive
```

## CCC folder

```text
Create Your Collective.CCC/
└── Creative Coin Collection/
    ├── Day-A-Week.Collective
    ├── CreativeCollective.Assets
    ├── CreativeCollective.Profiles
    ├── CreativeCollective.Projects
    ├── Light.Speed
    └── Joy.Coin
```

## Day A Week hierarchy

```text
Day-A-Week.Collective/
├── Day-A-Week.Community
├── DaCollective.Assets
├── DaCollective.Profiles
├── DaCollective.Projects
├── Day-A-Week.Girls
└── Day-A-Week.Boys
```

### Day A Week Community

```text
Day-A-Week.Community/
├── DaCommunity.Assets
├── DaCommunity.Profiles
└── DaCommunity.Projects
```

### Day-A-Week Girls

```text
Day-A-Week.Girls/
├── DaGorls.Assets
├── DaGorls.Profiles
└── DaGorls.Projects
```

### Day-A-Week Boys

```text
Day-A-Week.Boys/
├── DaBoiis.Assets
├── DaBoiis.Profiles
└── DaBoiis.Projects
```

## Library folder

```text
Create Your Collective.Library/
├── CreativeCollection.Layers
└── CreativeCollection.Build
```

### Layers

```text
CreativeCollection.Layers/
├── CCC.Backgrounds
├── CCC.Foregrounds
├── CCC.Text
├── CCC.Builds
├── CCC.Music
└── CCC.Layer.Archive
```

### Build

```text
CreativeCollection.Build/
├── CCC.Contract.Templates
├── CCC.Royalty.Templates
├── CCC.Mint.Packs
├── CCC.Meta.Packs
└── CCC.Test.Net
```

## Internal rule

Drive folder names should remain as built. GitHub paths should mirror the logic without forcing renames.
