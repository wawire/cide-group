"use client"

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors active:brightness-90 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-dark',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-control-border bg-background shadow-xs hover:bg-secondary hover:text-secondary-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-secondary hover:text-secondary-foreground',
        link: 'text-link underline underline-offset-4 hover:decoration-2',
        inverse: 'bg-white text-primary-dark hover:bg-white/90',
        'inverse-outline': 'border border-white bg-transparent text-white hover:bg-white/10',
      },
      size: {
        default: 'min-h-11 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'min-h-12 rounded-sm px-6 py-3 has-[>svg]:px-4',
        icon: 'size-11',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  onClick,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      {...props}
      disabled={asChild ? undefined : disabled || loading}
      aria-disabled={disabled || loading || undefined}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      className={cn(buttonVariants({ variant, size }), "aria-disabled:cursor-not-allowed aria-disabled:opacity-50 data-[loading=true]:before:size-4 data-[loading=true]:before:shrink-0 data-[loading=true]:before:animate-spin data-[loading=true]:before:rounded-full data-[loading=true]:before:border-2 data-[loading=true]:before:border-current data-[loading=true]:before:border-t-transparent", className)}
      onClick={(event) => {
        if (disabled || loading) {
          event.preventDefault()
          return
        }
        onClick?.(event)
      }}
    />
  )
}

export { Button, buttonVariants }
