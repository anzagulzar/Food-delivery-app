import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Phone, MapPin, Save, Camera } from 'lucide-react';
import { toast } from 'sonner';

const ProfilePage = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState('0300-1234567');
  const [address, setAddress] = useState('123 Main Street, Karachi');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Profile updated!');
    setIsSaving(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-xl z-40 px-4 py-4 border-b border-border">
        <h1 className="text-2xl font-display font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Manage your account</p>
      </header>

      <main className="px-4 pt-6">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-28 h-28 gradient-maroon rounded-full flex items-center justify-center glow-maroon">
              <User className="w-14 h-14 text-primary-foreground" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg">
              <Camera className="w-5 h-5 text-accent-foreground" />
            </button>
          </div>
          <h2 className="text-xl font-semibold text-foreground mt-4">{name}</h2>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="0300-XXXXXXX"
              type="tel"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Delivery Address
            </label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your address"
            />
          </div>

          <Button
            variant="maroon"
            size="lg"
            className="w-full mt-6"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
