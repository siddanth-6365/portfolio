import { redirect } from 'next/navigation';
import { resumeLink } from '@/data';

export default function ResumeRedirectPage() {
    redirect(resumeLink);
}
