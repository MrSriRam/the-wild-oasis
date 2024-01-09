import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getBooking } from '../../services/apiBookings'

export function useBooking() {
  const { bookingId } = useParams()

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: () => {
      console.log('useBooking Calling queryFn...')
      return getBooking(bookingId)
    },

    retry: false,
  })

  return { isLoading, error, booking }
}
