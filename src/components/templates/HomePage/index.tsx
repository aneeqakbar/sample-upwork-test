import DefaultLayout from '@/components/layouts/DefaultLayout'
import React from 'react'
import styles from './HomePage.module.css'
import SearchInput from '@/components/elements/SearchInput'
import AssessmentTable from '@/components/modules/AssessmentTable'

const HomePage = () => {
  return (
    <DefaultLayout>
      <article>
        <SearchInput />

        <section className={styles.main_content}>
          <AssessmentTable />
        </section>
      </article>
    </DefaultLayout>
  )
}

export default HomePage
