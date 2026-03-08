import clsx from 'clsx'

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <address
          className={clsx(
            'text-sm not-italic',
            invert ? 'text-neutral-300' : 'text-neutral-600',
          )}
        >
          <strong className={invert ? 'text-white' : 'text-neutral-950'}>
            Global Remote Services
          </strong>
          <br />
          Serving students worldwide 🌍
          <br />
          Available 24/7, across all time zones
        </address>
      </li>
      <li>
        <address
          className={clsx(
            'text-sm not-italic',
            invert ? 'text-neutral-300' : 'text-neutral-600',
          )}
        >
          <strong className={invert ? 'text-white' : 'text-neutral-950'}>
            Contact Us
          </strong>
          <br />
          hello@upthriveWork.com
          <br />
          wa.me/911234567890
        </address>
      </li>
    </ul>
  )
}