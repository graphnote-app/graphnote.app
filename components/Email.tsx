import React from 'react'
import styles from '../styles/Email.module.css'

export const Email = () => {
  const [enabled, setEnabled] = React.useState(false)

  const onEmailChange = (e: any) => {
    const empty = (e.target.value == "")
    setEnabled(!empty)
  }

  return (
    <div className={styles.container}>
      <form name="sign-up-list" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="sign-up-list" />
        <p>
          <label>
            <span>
            Your email: 
            </span>
            <br />
            <input 
              className={styles.emailText} 
              type="email" 
              placeholder="graphnote.io@gmail.com"
              name="email"
              onChange={onEmailChange}
            >
            </input>
          </label>
        </p>
        <p>
          <button
            className={styles.formSubmit}
            type="submit"
            disabled={!enabled}
          >
            Submit!
          </button>
        </p>
      </form>
    </div>
  )
}
