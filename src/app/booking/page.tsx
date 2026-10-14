import { getServerSession } from "next-auth";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  const profile = session?.user?.token ? await getUserProfile(session.user.token) : null;

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-5 py-16 sm:px-8">
      <section className="w-full rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-14">
        {profile ? (
          <table className="mb-10 w-full max-w-lg text-left text-sm text-stone-700">
            <tbody>
              <tr><td className="py-1 pr-6 font-semibold text-stone-900">Name</td><td>{profile.data.name}</td></tr>
              <tr><td className="py-1 pr-6 font-semibold text-stone-900">Email</td><td>{profile.data.email}</td></tr>
              <tr><td className="py-1 pr-6 font-semibold text-stone-900">Tel.</td><td>{profile.data.tel}</td></tr>
              <tr><td className="py-1 pr-6 font-semibold text-stone-900">Member Since</td><td>{new Date(profile.data.createdAt).toString()}</td></tr>
            </tbody>
          </table>
        ) : null}
        <p className="text-xs font-semibold tracking-[0.22em] text-emerald-700">VENUE EXPLORER</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Venue Booking</h1>
        <p className="mt-4 max-w-lg text-stone-600">Choose a featured venue and begin planning your next memorable gathering.</p>
        <form className="mt-10 space-y-8">
          <DateReserve />
          <button
            type="submit"
            name="Book Venue"
            className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Book Venue
          </button>
        </form>
      </section>
    </main>
  );
}
