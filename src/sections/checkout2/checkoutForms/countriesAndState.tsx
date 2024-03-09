import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import {countries} from '@/sample_data/countries'

export function CountryComponent ({onChange, value}: {onChange: any, value: string}) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
          {
            countries.map((country, index) => (
              <SelectItem key={index} value={country.value}>{country.value}</SelectItem>
            ))
          }
      </SelectContent>
    </Select>
  )
}

export function StateComponent ({onChange, value}: {onChange: any, value: string}) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="State" />
      </SelectTrigger>
      <SelectContent>
          {
            countries.map((country, index) => (
              <SelectItem key={index} value={country.value}>{country.value}</SelectItem>
            ))
          }
      </SelectContent>
    </Select>
  )
}
