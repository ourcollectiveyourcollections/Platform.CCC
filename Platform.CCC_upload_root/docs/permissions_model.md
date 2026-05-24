# Permissions Model

## Drive

| Role | Access |
|---|---|
| Platform Admin | Full access to platform root |
| Collective Admin | Access to assigned collective folders |
| Member | Own folder + approved shared folders |
| Contributor | Limited upload/comment access |
| Public | No raw Drive access unless published |

## Sheets

| Sheet type | Access |
|---|---|
| Master Registry | Admin only |
| Member intake | Append only |
| Public dashboard export | Read-only generated JSON |
| Audit log | Admin/system write only |

## GitHub

| Branch/path | Access |
|---|---|
| main | protected; manual review |
| schemas | maintainers only |
| templates | maintainers + approved contributors |
| examples | contributor-friendly |
| scripts | maintainers only |
| dashboard widgets | maintainers + frontend contributors |

## AI/Ollama

Ollama may draft:

- descriptions
- metadata
- summaries
- contract scaffolds
- project outlines

Ollama must not:

- publish to production
- sign transactions
- store private keys
- make legal claims final
- approve royalties
- alter live records without review
