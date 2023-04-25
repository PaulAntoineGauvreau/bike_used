import Link from 'next/link'

export default function Categories(props) {

    return (
      <Link href={`${props.slug}`} >{props.title}</Link>
    )
  }