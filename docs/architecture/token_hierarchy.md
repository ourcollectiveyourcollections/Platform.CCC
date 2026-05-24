# Token Hierarchy

## Purpose

Define the non-confused hierarchy of platform coin, launch collective coin, primary collective coin and sibling sub-collective coins.

## Canonical hierarchy

| Layer | Name | Coin | Full name | Asset class | Precision |
|---|---|---|---|---|---|
| Platform | Create Your Collective | CCC | Creatives' Coin Collections | Members and contributors | 7dp+ |
| Launch collective | Day A Week | DAYCC | Day-A-Week Community Coin | Open/non-primary members and groups | 5–6dp |
| Primary collective | Day-A-Week-Collective | DAWC | Day-A-Week Collective | Founding groups and profiles | 6dp |
| Sibling A | Day-A-Week Girls | DAW.G | Da.Gorls | Member profiles | 5dp |
| Sibling B | Day-A-Week Boys | DAW.B | Da.Boiis | Member profiles | 5dp |

## Inheritance logic

```text
CCC
└── DAYCC
    └── DAWC
        ├── DAW.G
        └── DAW.B
```

Inheritance means records roll upward for classification and dashboard grouping.

It does not mean all downstream benefits automatically flow into every parent or sibling layer without explicit rules.

## Sibling rule

```text
DAW.G ∩ DAW.B = Ø
```

A founding sibling member belongs to either DAW.G or DAW.B, not both.

Both inherit into DAWC.

## Operational interpretation

Early-stage records should be treated as:

- profile records
- contribution records
- membership records
- royalty accounting records
- metadata records
- mint-pack candidates

They should not be described as guaranteed investment returns.

## Ethereum role

Ethereum is the target mint/wallet/provenance layer.

It is not the system's first operational database.

Recommended order:

```text
registry row
→ metadata JSON
→ permission review
→ mint pack
→ testnet
→ live mint only after review
```

## Token standard notes

Potential future standards:

- ERC-721 for unique profile or canonical one-off records.
- ERC-1155 for collections of collections and semi-fungible library records.
- ERC-20-like accounting only if legal/tax review supports it.

No live standard is locked until testnet architecture and review are complete.
