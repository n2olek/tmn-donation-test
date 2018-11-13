Default:

```jsx
<Header>
  Default Header
</Header>
<Header>
  <Header.Content>Default</Header.Content>
</Header>
```

<h3>Page Headers</h3>
<p>Headers may be oriented to give the hierarchy of a section in the context of the page.</p>

```jsx
<Header>
  <h1>H1 First Header</h1>
</Header>
<br />
<Header>
  <h2>H2 Second Header</h2>
</Header>
<br />
<Header>
  <h3>H3 Third Header</h3>
</Header>
<br />
<Header>
  <h4>H4 Fourth Header</h4>
</Header>
```

<h3>Image</h3>
<p>A header may contain an image.</p>

```jsx
<Header srcAvatar={require('./images/image-avatar.png')}>

  <Header.Content>
    <h2>Header</h2>
    Header Description
  </Header.Content>
</Header>
<br />
<Header srcAvatar='https://material.io/tools/icons/static/ic_icons_192px_light.svg'>
  <Header.Content>Url</Header.Content>
</Header>
```

<h3>Button Header</h3>
<p>A header may contain an image.</p>

```jsx
<Header>
  <h2>Header</h2>
  <Header.Content>
    Header Description
    <Button outline secondary size='small'>Click Here</Button>
  </Header.Content>
</Header>
<br />
<Header>
  <Header.Button
    buttonName='Click Here'
  >
    <h3>บริจาคผ่านทรูมันนี่ วอลเล็ท</h3>
  </Header.Button>
</Header>
<br/>
<Header>
  <h3>บริจาคผ่านทรูมันนี่ วอลเล็ท</h3>
  <Header.Button
    buttonName='Click Here'
  />
</Header>
<br/>
<Header>
  <Header.Content>
    <h3>บริจาคผ่านทรูมันนี่ วอลเล็ท</h3>
    องค์กรการกุศลระดับชาติ
ร่วมบริจาคให้กับโครงการของเรา
  </Header.Content>
  <Header.Button
    buttonName='Click Here'
  />
</Header>

```
