const headerInfo = [
  'Derek Wallace',
  'Software Engineer',
  'Scottsdale, AZ'
]

const aboutInfo = [
  'About Me',
  'Hi! My name is Derek Wallace and I am a software engineer based \
  out of Scottsdale, Arizona. I enjoy rock climbing, music, and learning \
  web app development.'
]

const skillsInfo = [
  'Things I Know',
  'Lately I have been working with React, Node.js & Express, and trying to hone \
  my CSS skills. I also have a background in programming and I am familiar \
  with Java, Spring Framework, and C/C++.'
]

const resumeInfo = [
  'Resume',
  'You can download a copy of my resume below:'
]

const contactInfo = [
  'Contact Me',
  'For inquiring minds:'
]

const email = 'derek.scott.wallace@gmail.com'

const SectionContainer = React.createClass({
  displayName: 'Section',
  render() {
    return React.createElement(
      'div',
      { className: this.props.className },
      React.createElement('h1', { className: 'segment-header'}, this.props.headline),
      React.createElement('p', null, this.props.content),
      this.props.children
    )
  }
})

const header = React.createElement(
  'div',
  { className: 'header' },
  headerInfo.map((headerLine, i) => React.createElement('h1', { key: i, className: 'header-line' }, headerLine))
)

const about = React.createElement(
  SectionContainer,
  { className: 'segment top-line', headline: aboutInfo[0], content: aboutInfo[1] },
  null
)

const skills = React.createElement(
  SectionContainer,
  { className: 'segment top-line', headline: skillsInfo[0], content: skillsInfo[1] },
  null
)

const resume = React.createElement(
  SectionContainer,
  { className: 'segment bottom-line', headline: resumeInfo[0], content: resumeInfo[1] },
  React.createElement(
    'a',
    { href: 'surprise.png', className: 'button' },
    React.createElement('img', { src: 'resumeLogo.png', className: 'resume-image' }, null)
  )
)

const contact = React.createElement(
  SectionContainer,
  { className: 'segment bottom-line', headline: contactInfo[0], content: contactInfo[1] },
  React.createElement('a', { href: `mailto:${email}`, className: 'button' }, email)
)

const content = React.createElement('div', { className: 'content' }, about, skills, resume, contact)

const container = React.createElement('div', { className: 'container' }, header, content)

ReactDOM.render(container, document.getElementById('root'))
