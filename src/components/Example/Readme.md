Default:

```jsx
<Example>
  <Example.Children>Default</Example.Children>
</Example>
```

User interface (reuse):

```jsx
<Example ui='error'>
  <Example.Children>Error</Example.Children>
</Example>
<br />
<Example ui='success'>
  <Example.Children>Success</Example.Children>
</Example>
```

User interface for (can't reuse):

```jsx
<Example uiFor='special'>
  <Example.Children>Special</Example.Children>
</Example>
```

Source icon:

```jsx
<Example srcIcon={require('./images/icon-info.svg')}>
  <Example.Children>Path</Example.Children>
</Example>
<br />
<Example srcIcon='https://material.io/tools/icons/static/ic_icons_192px_light.svg'>
  <Example.Children>Url</Example.Children>
</Example>
```
