Default:

```jsx
<Button>Click Here</Button>
```

<h3>Button</h3>
<p>A standard button.</p>

```jsx
<Button>Click Here</Button>
<Button disable>Disable</Button>
```

<h3>Emphasis</h3>
<p>A button can be formatted to show different levels of emphasis.</p>

```jsx
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button primary disable>Primary disable</Button>
<Button secondary disable>Secondary disable</Button>
```

<h3>Size</h3>
<p>Buttons can have assorted sizes.</p>

```jsx
<Button size='small'>Small</Button>
<Button size='medium'>Medium</Button>
<Button size='large'>Large</Button>
```

<h3>Icon</h3>
<p>A button can be made of only an icon.</p>

```jsx
<Button icon srcIcon={require('./images/icon-info.svg')} />
<Button icon ui='icon-example' srcIcon={require('./images/icon-example.svg')} />
```

<h3>Inverted</h3>
<p>A button can be formatted to appear on a dark background.</p>

```jsx
<Button outline>Outline</Button>
<Button primary outline>Primary</Button>
<Button secondary outline>Secondary</Button>
<Button disable outline>disable</Button>
```

<h3>Active</h3>
<p>A button can show it is currently the active user selection.</p>

```jsx
<Button active>Active</Button>
<Button active outline>Outline</Button>
<Button active primary>Primary</Button>
<Button active primary outline>Primary Outline</Button>
<Button active secondary>Secondary</Button>
<Button active secondary outline>Secondary Outline</Button>
```

<h3>Fluid</h3>
<p>A button can take the width of its container.</p>

```jsx
<Button fluid>Fits to Container</Button>
<Button fluid primary>Fits to Container</Button>
```

<h3>Disabled</h3>
<p>A button can show it is currently unable to be interacted with.</p>

```jsx
<Button primary disable>Primary</Button>
<Button secondary disable>Secondary</Button>
<Button disable outline>Disable</Button>
```