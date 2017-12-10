import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ color, size, children }) => {
  return(
    <div>
      <h1 className={size}>{children}</h1>
      <style jsx>{`
        h1 {
          color: ${color};
          margin: 10px;
        }
        .small {
          font-size: 16px;
        }
        .medium {
          font-size: 22px;
        }
        .large {
          font-size: 32px;
        }
      `}</style>
    </div>
  )
}

Title.defaultProps = {
  color: "#000",
  size: "medium",
}

Title.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf['small', 'medium', 'large'],
  children: PropTypes.node.isRequired,
}

export default Title