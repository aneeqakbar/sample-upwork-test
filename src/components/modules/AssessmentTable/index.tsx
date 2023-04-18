import React from 'react'
import styles from './AssessmentTable.module.css'
import Image from 'next/image'
import Button from '@/components/elements/Button'
import SelectInput from '@/components/elements/SelectInput'

const AssessmentTable = () => {
  return (
    <div>
      <div className={styles.filters_cont}>
        <div className={styles.left_section}>
          <Button variant='dark'>+   Create Template</Button>
          <Button variant='dark'>?   Search Discovery</Button>
        </div>
        <div className={styles.right_section}>
          <SelectInput>
            <option value="Alphabetically">Alphabetically</option>
          </SelectInput>
        </div>
      </div>

      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Assessment Type</th>
              <th>Subject</th>
              <th>Year</th>
              <th>Shared with</th>
              <th>Assessment Admin</th>
              <th>Skill Groups</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image className={styles.link_icon} src="/assets/icons/link.svg" alt="link" width={18} height={18}></Image>
                Critical Analysis
              </td>
              <td>Literature</td>
              <td>7</td>
              <td>Alphington Grammar</td>
              <td>James Smith</td>
              <td>
                <div className={styles.tag_cont}>
                  <div className={`${styles.tag} ${styles.v_pink}`}>
                    INTRO
                  </div>
                  <div className={`${styles.tag} ${styles.v_purple}`}>
                    WHAT
                  </div>
                  <div className={`${styles.tag} ${styles.v_green}`}>
                    HOW
                  </div>
                  <div className={`${styles.tag} ${styles.v_blue}`}>
                    WHY
                  </div>
                  <div className={`${styles.tag} ${styles.v_yellow}`}>
                    IMAGE
                  </div>
                  <div className={`${styles.tag} ${styles.v_orange}`}>
                    EXPRESSION
                  </div>
                </div>
              </td>
              <td>
                <Image className={styles.options_icon} src="/assets/icons/horizontal-dots.svg" alt="link" width={18} height={4}></Image>
              </td>
            </tr>
            <tr>
              <td>
                Critical Analysis
              </td>
              <td>Literature</td>
              <td>7</td>
              <td>Only me</td>
              <td>Grace Elliott</td>
              <td>
              </td>
              <td>
                <Image className={styles.options_icon} src="/assets/icons/horizontal-dots.svg" alt="link" width={18} height={4}></Image>
              </td>
            </tr>
            <tr>
              <td>
                Critical Analysis
              </td>
              <td>Literature</td>
              <td>7</td>
              <td>Public</td>
              <td></td>
              <td>
              </td>
              <td>
                <Image className={styles.options_icon} src="/assets/icons/horizontal-dots.svg" alt="link" width={18} height={4}></Image>
              </td>
            </tr>
            <tr>
              <td>
                <Image className={styles.link_icon} src="/assets/icons/link.svg" alt="link" width={18} height={18}></Image>
                Critical Analysis
              </td>
              <td>Literature</td>
              <td>8</td>
              <td>Alphington Grammar</td>
              <td></td>
              <td>
              </td>
              <td>
                <Image className={styles.options_icon} src="/assets/icons/horizontal-dots.svg" alt="link" width={18} height={4}></Image>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AssessmentTable
