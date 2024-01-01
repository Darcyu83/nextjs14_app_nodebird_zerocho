"use client"
import { useParams } from "next/navigation"
import styles from "./profile.module.css"

export default function Profile() {
  const params = useParams<{ username: string; id: string }>()

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h3>{params.username}</h3>
        <h3>{params.id}</h3>
      </div>
    </main>
  )
}
