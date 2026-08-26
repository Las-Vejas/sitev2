import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { POSTCARD_DESIGNS as DESIGNS } from '@/lib/postcards';

export function GuestbookForm() {
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    url: '',
    design: 'plain',
  });

  const currentDesign = DESIGNS[currentDesignIndex];

  const handlePrevious = () => {
    setCurrentDesignIndex((prev) => (prev - 1 + DESIGNS.length) % DESIGNS.length);
  };

  const handleNext = () => {
    setCurrentDesignIndex((prev) => (prev + 1) % DESIGNS.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [id || 'message']: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      design: currentDesign.id,
    };

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData({ message: '', name: '', url: '', design: '', });
        // Optionally show success message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url('${currentDesign.imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: '530.67/302',
      } as React.CSSProperties}
      className="w-full flex flex-col justify-between gap-y-2 h-full p-5"
    >
      <textarea
        id="message"
        value={formData.message}
        onChange={handleChange}
        className="flex-1 w-full rounded-xl resize-none p-3 bg-white/70 text-black placeholder-gray-500"
        placeholder="Write something..."
      />
      <div className="flex gap-2">
        <Field>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="h-8 w-full min-w-0 bg-white/70 text-black placeholder-gray-500 rounded-lg border border-input  px-2.5 py-1 text-base transition-colors outline-none  focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm  dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
          />
        </Field>
        <Field>
          <input
            id="url"
            type="url"
            placeholder="Website"
            value={formData.url}
            onChange={handleChange}
            className="h-8 w-full min-w-0 bg-white/70 text-black placeholder-gray-500 rounded-lg border border-input  px-2.5 py-1 text-base transition-colors outline-none  focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm  dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
          />
        </Field>
      </div>
      <div className="flex justify-between w-full gap-2">
        <ButtonGroup>
          <Button
            type="button"
            size="icon"
            variant="form"
            onClick={handlePrevious}
            className='bg-white/90 text-black'
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="form"
            className="pointer-events-none w-28"
            style={{ color: '#000' }}
          >
            {currentDesign.label}
          </Button>
          <Button
            type="button"
            size="icon"
            variant="form"
            onClick={handleNext}
            style={{ color: '#000' }}
          >
            <ChevronRight />
          </Button>
        </ButtonGroup>
        <Button type="submit">
          Sign
        </Button>
      </div>
    </form>
  );
}
