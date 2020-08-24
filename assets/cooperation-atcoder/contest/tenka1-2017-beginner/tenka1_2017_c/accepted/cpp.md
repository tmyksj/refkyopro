# Tenka1 Programmer Beginner Contest
## C - 4/N
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    for (long long i = 1; i <= 3500; i++) {
        for (long long j = 1; j <= 3500; j++) {
            if (4 * i * j - n * i - n * j > 0 && n * i * j % (4 * i * j - n * i - n * j) == 0) {
                cout << i << " " << j << " " << n * i * j / (4 * i * j - n * i - n * j) << endl;
                goto out;
            }
        }
    }
out:
    ;
}
```
