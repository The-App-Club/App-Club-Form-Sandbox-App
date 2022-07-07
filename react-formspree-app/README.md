- Stack
  - [formspree](https://formspree.io/)
  - [mui](https://mui.com/)

## Set Up

```bash
$ firebase login

$ firebase init
```

## Add Project Alias

```bash
$ firebase use --add
? Which project do you want to add? scrollstorytelling2
? What alias do you want to use for this project? (e.g. staging) scroll

Created alias scroll for scrollstorytelling2.
Now using alias scroll (scrollstorytelling2)
```

## Build

```bash
$ time yarn build
```

## Change Deploy Target

```bash
$ firebase target
Resource targets for scrollstorytelling2:


$ firebase use scroll
Now using alias scroll (scrollstorytelling2)

$ firebase target
Resource targets for scrollstorytelling2:

```

## Deploy

```bash
$ time firebase deploy
```
