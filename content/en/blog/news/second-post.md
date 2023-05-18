---
_schema: post
title: The second blog post
linkTitle: Second blog post
date: 2018-10-06T00:10:00Z
author: Fake Author
weight: 2
description: >
  A short lead description about this content page. Text here can also be
  **bold** or _italic_ and can even be split over multiple paragraphs.
---
Text can be **bold**, _italic_, or <s>strikethrough</s>. [Links](https://github.com) should be blue with no underlines (unless hovered over).

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

> There should be no margin above this first sentence.
>
> Blockquotes should be a lighter gray with a border along the left side in the secondary color.
>
> There should be no margin below this final sentence.

## First Header

This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

On big screens, paragraphs and headings should not take up the full container width, but we want tables, code blocks and similar to take the full width.

Lorem markdownum tuta hospes stabat; idem saxum facit quaterque repetito occumbere, oves novem gestit haerebat frena; qui. Respicit recurvam erat: pignora hinc reppulit nos **aut**, aptos, ipsa.

Meae optatos _passa est_ Epiros utiliter _Talibus niveis_, hoc lata, edidit. Dixi ad aestum.

## Header 2

> This is a blockquote following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Header 3

```
This is a code block following a header.
```

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
2. This is an ordered list following a header.
3. This is an ordered list following a header.

###### Header 6

<table><thead><tr><th>What</th><th>Follows</th></tr></thead><tbody><tr><td>A table</td><td>A header</td></tr><tr><td>A table</td><td>A header</td></tr><tr><td>A table</td><td>A header</td></tr></tbody></table>

---

There's a horizontal rule above and below this.

---

Here is an unordered list:

- Salt-n-Pepa
- Bel Biv DeVoe
- Kid 'N Play

And an ordered list:

1. Michael Jackson
2. Michael Bolton
3. Michael Bublé

And an unordered task list:

- \[x\] Create a sample markdown document
- \[x\] Add task lists to it
- \[ \] Take a vacation

And a "mixed" task list:

- \[ \] Steal underpants
- ?
- \[ \] Profit\!

And a nested list:

- Jackson 5
  - Michael
  - Tito
  - Jackie
  - Marlon
  - Jermaine
- TMNT
  - Leonardo
  - Michelangelo
  - Donatello
  - Raphael

Definition lists can be used with Markdown syntax. Definition terms are bold.

Name : Godzilla

Born : 1952

Birthplace : Japan

Color : Green

---

Tables should have bold headings and alternating shaded rows.

<table><thead><tr><th>Artist</th><th>Album</th><th>Year</th></tr></thead><tbody><tr><td>Michael Jackson</td><td>Thriller</td><td>1982</td></tr><tr><td>Prince</td><td>Purple Rain</td><td>1984</td></tr><tr><td>Beastie Boys</td><td>License to Ill</td><td>1986</td></tr></tbody></table>

If a table is too wide, it should scroll horizontally.

<table><thead><tr><th>Artist</th><th>Album</th><th>Year</th><th>Label</th><th>Awards</th><th>Songs</th></tr></thead><tbody><tr><td>Michael Jackson</td><td>Thriller</td><td>1982</td><td>Epic Records</td><td>Grammy Award for Album of the Year, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&amp;B Album, Brit Award for Best Selling Album, Grammy Award for Best Engineered Album, Non-Classical</td><td>Wanna Be Startin' Somethin', Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T. (Pretty Young Thing), The Lady in My Life</td></tr><tr><td>Prince</td><td>Purple Rain</td><td>1984</td><td>Warner Brothers Records</td><td>Grammy Award for Best Score Soundtrack for Visual Media, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&amp;B Album, Brit Award for Best Soundtrack/Cast Recording, Grammy Award for Best Rock Performance by a Duo or Group with Vocal</td><td>Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U, Baby I'm a Star, Purple Rain</td></tr><tr><td>Beastie Boys</td><td>License to Ill</td><td>1986</td><td>Mercury Records</td><td>noawardsbutthistablecelliswide</td><td>Rhymin &amp; Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, (You Gotta) Fight for Your Right, No Sleep Till Brooklyn, Paul Revere, Hold It Now, Hit It, Brass Monkey, Slow and Low, Time to Get Ill</td></tr></tbody></table>

---

Code snippets like `var foo = "bar";` can be shown inline.

Also, `this should vertically align` <s><code>with this</code></s> <s>and this</s>.

Code can also be shown in a block element.

```
foo := "bar";
bar := "foo";
```

Code can also use syntax highlighting.

```go
func main() {
  input := `var foo = "bar";`

  lexer := lexers.Get("javascript")
  iterator, _ := lexer.Tokenise(nil, input)
  style := styles.Get("github")
  formatter := html.New(html.WithLineNumbers())

  var buff bytes.Buffer
  formatter.Format(&buff, style, iterator)

  fmt.Println(buff.String())
}
```

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

Inline code inside table cells should still be distinguishable.

<table><thead><tr><th>Language</th><th>Code</th></tr></thead><tbody><tr><td>Javascript</td><td><code>var foo = "bar";</code></td></tr><tr><td>Ruby</td><td><code>foo = "bar"{</code></td></tr></tbody></table>

---

Small images should be shown at their actual size.

![](https://placekitten.com/g/300/200/)

Large images should always scale down and fit in the content container.

![](https://placekitten.com/g/1200/800/)

## Components

### Alerts

{{< alert color="danger" >}}This is an alert.{{< /alert >}} {{< alert color="warning" title="Note: Changed" >}}This is an alert with a title.{{< /alert >}} {{< alert color="info" title="This now has a title" type="success" >}}This is a successful alert.{{< /alert >}} {{< alert color="danger" type="warning" >}}This is a warning!{{< /alert >}} {{< alert color="gray" title="Warning!" type="warning" >}}This is a warning with a title!{{< /alert >}}

## Sizing

Add some sections here to see how the ToC looks like. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Parameters available

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Using pixels

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Using rem

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Memory

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### RAM to use

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### More is better

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Used RAM

Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

```
This is the final element on the page and there should be no margin below this.
```
