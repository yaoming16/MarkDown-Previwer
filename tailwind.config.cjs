/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        'lg': '5px 5px 15px rgba(0, 0, 0, 0.70)',
        'xl': '10px 10px 15px rgba(0, 0, 0, 0.70)',
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            '--tw-prose-body': theme('colors.neutral[800]'),
            '--tw-prose-headings': theme('colors.neutral[900]'),
            '--tw-prose-lead': theme('colors.neutral[700]'),
            '--tw-prose-links': theme('colors.blue[500]'),
            '--tw-prose-bold': theme('colors.neutral[900]'),
            '--tw-prose-counters': theme('colors.neutral[600]'),
            '--tw-prose-bullets': theme('colors.neutral[400]'),
            '--tw-prose-hr': theme('colors.neutral[300]'),
            '--tw-prose-quotes': theme('colors.neutral[900]'),
            '--tw-prose-quote-borders': theme('colors.neutral[300]'),
            '--tw-prose-captions': theme('colors.neutral[700]'),
            '--tw-prose-code': theme('colors.orange[900]'),
            '--tw-prose-pre-code': theme('colors.neutral[100]'),
            '--tw-prose-pre-bg': theme('colors.white[700]'),
            '--tw-prose-th-borders': theme('colors.neutral[600]'),
            '--tw-prose-td-borders': theme('colors.neutral[600]'),
            '--tw-prose-invert-body': theme('colors.neutral[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.neutral[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.neutral[400]'),
            '--tw-prose-invert-bullets': theme('colors.neutral[600]'),
            '--tw-prose-invert-hr': theme('colors.neutral[700]'),
            '--tw-prose-invert-quotes': theme('colors.neutral[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
            '--tw-prose-invert-captions': theme('colors.neutral[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.neutral[600]'),
            '--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}