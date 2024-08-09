import uuid from 'react-uuid'
import React from 'react'
import { Patient } from '../../lib/types/Patient'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Input from '../input/Input'
import Button from '../button/Button'
import { getPatientFormError } from '../../lib/utils/patientsHelper'
import { formatDate } from '../../lib/utils/dateHelper'

const LETTERS_REGEX = new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/)

interface PatientFormProps {
  onSubmit: (patient: Patient) => void
  patient?: Patient
}

export default function PatientForm({
  onSubmit,
  patient,
}: PatientFormProps): React.JSX.Element | null {
  const formSchema = z.object({
    name: z
      .string()
      .max(40, { message: getPatientFormError('long', 40) })
      .min(4, { message: getPatientFormError('short', 4) })
      .regex(LETTERS_REGEX, { message: 'Name should contain only alphabets' }),
    description: z
      .string()
      .max(900, { message: getPatientFormError('long', 900) })
      .optional(),
    website: z
      .string()
      .max(40, { message: getPatientFormError('long', 40) })
      .optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: patient?.name,
      description: patient?.description,
      website: patient?.website,
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit({
      name: data.name,
      id: patient?.id ?? uuid(),
      website: data.website ?? patient?.website,
      avatar: patient?.avatar,
      createdAt: patient?.createdAt ?? formatDate({ date: new Date() }),
      description: data.description ?? patient?.description,
    })
  }

  return (
    <FormProvider {...form}>
      <form
        className="gap-3 grid grid-cols-1 w-full sm:w-[400px]"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => (
            <Input
              placeholder="Name"
              {...field}
              error={form.formState.errors?.name?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field }) => (
            <Input
              placeholder="Description"
              {...field}
              error={form.formState.errors?.description?.message}
            />
          )}
        />
        <Controller
          name="website"
          control={form.control}
          render={({ field }) => (
            <Input
              placeholder="Website"
              {...field}
              error={form.formState.errors?.website?.message}
            />
          )}
        />
        <Button text="Submit" type="submit" />
      </form>
    </FormProvider>
  )
}
