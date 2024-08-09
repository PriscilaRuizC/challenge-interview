import React from 'react'
import { Patient } from '../../lib/types/Patient'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EDIT_PATIENT_FORM_ERRORS } from '../../lib/fixtures/editPatientFormFixtures'
import Input from '../input/Input'
import Button from '../button/Button'

interface EditPatientFormProps {
  onSubmit: (patient: Patient) => void
  patient: Patient
}

export default function EditPatientForm({
  onSubmit,
  patient,
}: EditPatientFormProps): React.JSX.Element | null {
  const formSchema = z.object({
    name: z.string().max(40, { message: EDIT_PATIENT_FORM_ERRORS.length }),
    description: z
      .string()
      .max(900, { message: EDIT_PATIENT_FORM_ERRORS.length }),
    website: z
      .string()
      .max(40, { message: EDIT_PATIENT_FORM_ERRORS.length })
      .optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      name: patient.name,
      description: patient.description,
      website: patient.website,
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit({
      ...data,
      id: patient.id,
      website: data.website ?? patient.website,
      avatar: patient.avatar,
    })
  }

  const isFormDisabled = !form.formState.isValid

  return (
    <FormProvider {...form}>
      <form
        className="gap-3 grid grid-cols-1 w-[400px]"
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
        <Button text="Submit" type="submit" disabled={isFormDisabled} />
      </form>
    </FormProvider>
  )
}
