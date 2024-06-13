type TitleProps = {
  text: string
  isCenter?: boolean
}
export default function Title({ text, isCenter }: TitleProps) {
  return (
    <div className={isCenter ? 'title center': 'title'}>
      <h2>{text}</h2>
    </div>
  )
}