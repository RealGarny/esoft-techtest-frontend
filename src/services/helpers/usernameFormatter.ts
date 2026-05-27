import { User } from '@/src/types/entities/User';

class UsernameFormatter {
  public static normal(user: User) {
    return [user.lastName, user.firstName, user.middleName]
      .filter(Boolean)
      .join(' ');
  }
  private static shorten(string?: string) {
    if (!string) return '';
    return `${string[0]}.`;
  }
  public static short(user: User) {
    return `${user.lastName} ${UsernameFormatter.shorten(user.firstName)}${UsernameFormatter.shorten(user.middleName ?? '')}`;
  }
}

export default UsernameFormatter;
