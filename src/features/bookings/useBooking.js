import { useQuery } from '@tanstack/react-query'
import { getBooking } from '../../services/apiBookings'
import { useParams } from 'react-router-dom'

export function useBooking() {
  const { bookingId } = useParams()

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  })

  return { isLoading, error, booking }
}

// -----Chat Gpt Codes-----

// export function useBooking() {
//   const { bookingId } = useParams()

//   const {
//     isLoading,
//     data: booking,
//     error,
//   } = useQuery({
//     queryKey: ['booking'],
//     queryFn: async () => {
//       const bookingData = await getBooking(bookingId)
//       console.log('in useBooking() wow!', bookingData)
//       return bookingData
//     },
//   })

//   return { isLoading, booking, error }
// }

// export function useBooking() {
//   const { bookingId } = useParams()

//   const {
//     isLoading,
//     data: booking,
//     error,
//   } = useQuery({
//     queryKey: ['booking'],
//     queryFn: async () => {
//       try {
//         const bookingData = await getBooking(bookingId);
//         console.log('in useBooking() wow!', bookingData);
//         return bookingData;
//       } catch (error) {
//         throw new Error('Error fetching booking data');
//       }
//     },
//   })

//   return { isLoading, booking, error }
// }
