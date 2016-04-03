# Help

## I want to add a new tag
So if trade-finance and oil-and-gas aren't enough tags, cool.

Add the tag name to *_data/tags.yaml*
```yaml
cool-new-tag:
    name: A cool new tag
```
and create a file called blog/tag/cool-new-tag.md containing
```yaml
---
layout: blog_by_tags
tag: cool-new-tag
permalink: /blog/tag/cool-new-tag/
---
```
