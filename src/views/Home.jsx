import useApp from '../context/useApp';

export default function Home() {
  const {user} = useApp();

  return (
    <>
      {user}
    </>
  )
}
